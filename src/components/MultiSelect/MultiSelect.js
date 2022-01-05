import React from 'react';

const MultiSelect = (props) => {
  const handleCallback = (value) => {
    props.callback(value);
  };
  return (
    <div style={{ marginTop: '40px' }}>
      <label>{props.label}</label>
      <select
        style={{ marginTop: '5px', display: 'block' }}
        onChange={(e) => handleCallback(e.target.value)}
      >
        <option value=''>--Please Select an Option</option>
        {props.options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MultiSelect;
