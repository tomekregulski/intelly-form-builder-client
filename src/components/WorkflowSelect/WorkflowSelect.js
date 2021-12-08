import React, { useState, useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import NewElement from '../NewElement/NewElement';

import './WorkflowSelect.css';

const WorkflowSelect = () => {
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
    <div>
      <div id='top-border'></div>
      <div id='main-body'>
        <div id='primary-btns'>
          <Button
            margin='0 5px 0 0'
            color='rgba(0, 180, 249, 0.872)'
            label='New Form'
            callback={() => setTask('new')}
          />
          <Button
            margin='0 0 0 5px'
            color='rgba(0, 180, 249, 0.872)'
            label='Edit Existing'
            onClick={() => setTask('edit')}
          >
            Edit Existing
          </Button>
        </div>
        <div id='bottom-border'></div>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default WorkflowSelect;
