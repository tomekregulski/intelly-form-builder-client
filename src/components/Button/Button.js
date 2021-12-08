import React from 'react';
import './Button.css';

const Button = (props) => {
  const handleCallback = () => {
    console.log('callback');
    props.callback();
  };

  return (
    <button
      style={{
        margin: `${props.margin}`,
        color: 'white',
        backgroundColor: `${props.color}`,
        border: `${props.color}`,
      }}
      onClick={() => handleCallback()}
    >
      {props.label}
    </button>
  );
};

export default Button;
