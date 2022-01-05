import React from 'react';

const YesNoSelect = (props) => {
  return (
    <div style={{ marginTop: '40px' }}>
      <label>{props.label}</label>
      <select style={{ marginTop: '5px', display: 'block' }}>
        <option value='Yes'>Yes</option>
        <option value='No'>No</option>
      </select>
    </div>
  );
};

export default YesNoSelect;
