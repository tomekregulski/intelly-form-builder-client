import React, { useState, useContext } from 'react';
import { SessionContext } from './context/SessionContext';

import Modal from './components/Modal/Modal';
import NewElement from './components/NewElement/NewElement';

function App() {
  const { data } = useContext(SessionContext);
  const [formData, setFormData] = data;

  const [show, setShow] = useState(false);
  const [task, setTask] = useState('');

  const saveElement = () => {
    console.log('save');
    setShow(false);
    setFormData((prevState) => [...prevState, 'save']);
  };

  return (
    <div className='App'>
      <h1>Form Builder</h1>
      {/* TODO - Add functionality */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <button onClick={() => setTask('edit')}>Select a Form to Edit</button>
          <button onClick={() => setTask('new')}>Start a New Form</button>
        </div>
        <div>
          {task === 'new' && (
            <>
              <button onClick={() => setShow(true)}>Add New Element</button>
              <Modal show={show} onClose={() => saveElement()} title='Element'>
                <>
                  <NewElement />
                </>
              </Modal>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
