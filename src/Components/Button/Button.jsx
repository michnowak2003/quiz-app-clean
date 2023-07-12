import React from 'react';
import './Button.scss';
import PropTypes from "prop-types";
const Button = ({ type, children, onClick}) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  children: PropTypes.element.isRequired
};
export default Button;
