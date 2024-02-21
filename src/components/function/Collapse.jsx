import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Add prop-types import
import arrow from '../../assets/arrowDown.png';

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`arrow ${isCollapsed ? 'collapsed' : ''}`}>
          <img src={arrow} alt="arrow" />
        </span>
      </div>
      {!isCollapsed && (
        <div className="collapse-content arrow">
          {children}
        </div>
      )}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}; // Define prop types

export default Collapse;

