import React from 'react';
import './Post.css';

const Post = ({ title, body }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <hr className='hr' />
      <p>{body}</p>
    </div>
  );
};

export default Post;
