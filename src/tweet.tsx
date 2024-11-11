// Tweet.js
import React, { useState } from 'react';

const Tweet = ({ username, tweetText, initialLikeCount }) => {

    const [isLiked, setIsLiked] = useState(false);

    const [likeCount, setLikeCount] = useState(initialLikeCount);
  

    const handleLike = () => {
      if (isLiked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setIsLiked(!isLiked); 
    };
  
    return (
      <div className="tweet">
        <h2>{username}</h2>
        <p>{tweetText}</p>
        <div>
          <button onClick={handleLike}>
            {isLiked ? '❤️' : '🤍'} Like ({likeCount})
          </button>
        </div>
      </div>
    );
  };


export default Tweet;
