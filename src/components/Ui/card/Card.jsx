import React, { useState } from 'react';

const Card = ({ title, children }) => {
  const [isCard, setIsCard] = useState(false);

  const toggleCarde = () => {
    setIsCard(!isCard);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCarde}>
        <h3>{title}</h3>

      </div>
      {!isCard && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;

