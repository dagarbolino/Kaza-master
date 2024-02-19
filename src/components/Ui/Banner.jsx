import React from 'react';

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="banner-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
