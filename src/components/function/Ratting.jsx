import React, { useState } from 'react';

import star from '../../assets/star.png'
import starG from '../../assets/starG.png'


const Rating = ({ initialValue = 0, onChange }) => {
  const [rating, setRating] = useState(initialValue);

  const handleRatingChange = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="ratings">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          className={starValue <= rating ? 'filled' : ''}
          onClick={() => handleRatingChange(starValue)}
        >
          <img
            src={starValue <= rating ? star : starG}
            alt="star"
            className={`star ${starValue <= rating ? 'starG' : 'star'}`}
          />
        </span>
      ))}
    </div>
  );
};

export default Rating;

