import React, { useState } from 'react';

import Modal from './components/Modal/Modal';
import NewElement from './components/NewElement/NewElement';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
      <h1>Form Builder</h1>
      <button onClick={() => setShow(true)}>Add New Element</button>
      <Modal show={show} onClose={() => setShow(false)} title='Element'>
        <>
          <NewElement />
        </>
      </Modal>
    </div>
  );
}

export default App;
