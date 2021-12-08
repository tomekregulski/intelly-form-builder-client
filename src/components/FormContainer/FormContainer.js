import React, { useState, useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';

import Input from '../Input/Input';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import NewElement from '../NewElement/NewElement';

import './FormContainer.css';

const FormContainer = () => {
  const { data, workflow, workItem } = useContext(SessionContext);

  const [formData, setFormData] = data;
  const [showWorkflowSelect, setShowWorkflowSelect] = workflow;
  const [task, setTask] = workItem;

  const [show, setShow] = useState(false);

  const handleCancel = () => {
    console.log('cancel');
    setTask('');
    setShowWorkflowSelect(true);
  };

  const saveElement = () => {
    console.log('save');
    setShow(false);
    setFormData((prevState) => [...prevState, 'save']);
  };

  return (
    <div>
      {showWorkflowSelect === false && (
        <div id='form-container'>
          <Input label='Name of Form: ' />
          <div>
            {task === 'new' && (
              <>
                <Button
                  color='rgba(0, 180, 249, 0.872)'
                  margin='15px 0 15px 0'
                  label='Add New Element'
                  onClick={() => setShow(true)}
                ></Button>
                <Modal
                  show={show}
                  onClose={() => saveElement()}
                  title='Element'
                >
                  <>
                    <NewElement />
                  </>
                </Modal>
              </>
            )}
          </div>
          <Button
            color='rgba(0, 180, 249, 0.872)'
            label='Cancel'
            callback={() => handleCancel()}
          />
        </div>
      )}
    </div>
  );
};

export default FormContainer;
