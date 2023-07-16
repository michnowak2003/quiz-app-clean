import React from 'react';
import './Button.scss';
import PropTypes from "prop-types";
const Button = ({ type, children, onClick, className}) => {
  return (
    <button className={`button ${type} ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "icon"]).isRequired,
  children: PropTypes.element.isRequired
};
export default Button;
