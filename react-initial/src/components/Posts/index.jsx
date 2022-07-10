/* eslint-disable react/react-in-jsx-scope */
import { PostCard } from '../PostCard/';
import './styles.css';
import { proptypes } from 'prop-types';

export const Posts = ({ posts = [] }) => {
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>;
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: proptypes.array,
};
