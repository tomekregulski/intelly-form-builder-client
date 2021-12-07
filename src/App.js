import React, { useState } from 'react';

import Modal from './components/Modal/Modal';
import Input from './components/Input/Input';
import MultiSelect from './components/MultiSelect/MultiSelect';
import YesNoSelect from './components/YesNoSelect/YesNoSelect';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
      <h1>Form Builder</h1>
      <button onClick={() => setShow(true)}>Add New Element</button>
      <Modal show={show} onClose={() => setShow(false)} title='Element'>
        <>
          <Input />
          <MultiSelect />
          <YesNoSelect />
        </>
      </Modal>
    </div>
  );
}

export default App;
