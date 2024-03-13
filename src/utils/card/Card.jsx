import React from 'react';


const Card = ({ title, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;


