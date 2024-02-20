import React, { useState } from 'react';

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
          <i className={`fa-solid fa-star ${starValue <= rating ? 'filled-grey' : ''}`}></i>
        </span>
      ))}
    </div>
  );
};

export default Rating;
