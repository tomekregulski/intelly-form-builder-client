import React, { useState } from 'react';

import Input from '../Input/Input';
import MultiSelect from '../MultiSelect/MultiSelect';

import Button from '../Button/Button';

const NewElement = () => {
  const [element, setElement] = useState('');
  const [responseFields, setResponseFields] = useState(3);

  const selectElement = (data) => {
    setElement(data);
  };

  const renderResponseOptions = () => {
    let responses = [];
    let key = 1;
    let response = <Input key={key} label='Input Response Text: ' />;
    for (let i = 0; i < responseFields; i++) {
      responses.push(response);
      key++;
    }
    return responses;
  };

  const addResponseOption = () => {
    setResponseFields(responseFields + 1);
  };

  const removeResponseOption = () => {
    setResponseFields(responseFields - 1);
  };

  const renderInput = () => {
    switch (element) {
      case 'text-input':
        return <Input label='Input Question Text: ' />;
      case 'numerical-input':
        return <Input label='Input Question Text: ' />;
      case 'yes-no':
        return <Input label='Input Question Text: ' />;
      case 'multi-select':
        return (
          <>
            <Input label='Input Question Text: ' />
            {renderResponseOptions()}
            <Button callback={() => addResponseOption()}>
              Add Response Option
            </Button>
            <Button callback={() => removeResponseOption()}>
              Remove Response Option
            </Button>
          </>
        );
      case 'checkbox':
        return (
          <>
            <Input label='Input Question Text: ' />
            {renderResponseOptions()}
            <Button callback={() => addResponseOption()}>
              Add Response Option
            </Button>
            <Button callback={() => removeResponseOption()}>
              Remove Response Option
            </Button>
          </>
        );
      default:
        return;
    }
  };

  return (
    <>
      <MultiSelect
        callback={selectElement}
        label='Question Type: '
        options={[
          'text-input',
          'numerical-input',
          'yes-no',
          'multi-select',
          'checkbox',
        ]}
      />

      {element !== '' && renderInput()}
    </>
  );
};

export default NewElement;
