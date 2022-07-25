/* eslint-disable no-undef */
import { useContext, useEffect, useRef } from "react";
import { PostsContext } from "../../contexts/PostsProvider/context";
import { loadPosts} from '../../contexts/PostsProvider/actions';
import { CounterContext } from "../../contexts/CounterProvider/context";
import { incrementCounter } from "../../contexts/CounterProvider/action";

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;


  useEffect( () => {
      loadPosts(postsDispatch).then( (dispatch) => {
        if(isMounted.current) {
            dispatch();
        }
        return () => {
          isMounted.current = false;
        };
      });

  }, [postsDispatch])
    return (
        <div>
            <button onClick={ () => incrementCounter(counterDispatch)}>Counter:{counterState.counter}+</button>
            <button onClick={ () => decrementCounter(counterDispatch)}>Counter:{counterState.counter}-</button>
            <h1>Posts</h1>
            {postsState.loading && (<p><strong>Loading posts...</strong></p>)}
            {postsState.posts.map( (post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    );
}