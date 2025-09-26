import React, { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };


  return <div className='container'>
    <h3>{likes === 0 ? 'No likes yet' : ` ❤️${likes} likes`}</h3>
    <button onClick={handleLike}>Like 👍</button>
  </div>;
};

export default LikeButton;
