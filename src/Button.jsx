import React from 'react';
import './Button.css';

const Button = ({ buttons }) => {
  return (
    <div className="button1">
      {buttons.map((button, index) => (
        <button className="button" key={index}>{button}</button>
      ))}
    </div>
  );
};

export default Button;
