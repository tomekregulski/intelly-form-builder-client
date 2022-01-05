import React from 'react';

const Input = (props) => {
  return (
    <div style={{ marginTop: '40px' }}>
      <label>{props.label}</label>
      <input
        style={{ marginTop: '5px', display: 'block' }}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
