import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span>{isCollapsed ? '+' : '-'}</span>
      </div>
      {!isCollapsed && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;

