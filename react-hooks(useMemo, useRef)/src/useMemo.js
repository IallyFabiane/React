import P from 'prop-types';
import { useEffect, useMemo, useState, useRef } from 'react';
import './App.css';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
    post: P.shape({
      id: P.number,
      title: P.string,
      body: P.string,
  }),
    handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  console.log('Pai renderizou!');

  // ComponentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  //ComponentDidUpdate
  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value); //função handleClick que ativa o novo Estado a partir do evento click do virtual DOM
  };

  return (
    <div className="App">
      <h6>Renderizou: {contador.current}x</h6>
      <p>
        <input
          id="capture"
          autoComplete="off"
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)} //capturando o valor do input e setando o novo Estado
        />
       <label>
         Digite aqui
       </label>
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;