/* eslint-disable react/react-in-jsx-scope */
import { proptypes } from 'prop-types';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post" key={id}>
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: proptypes.string,
  cover: proptypes.string,
  body: proptypes.string,
  id: proptypes.number,
};
