import React from 'react';

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt={''} className="banner-image" />
      <h1 className='banner-h1'>{title}</h1>
    </div>
  );
};

export default Banner;
