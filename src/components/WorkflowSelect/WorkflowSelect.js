import React, { useState, useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import NewElement from '../NewElement/NewElement';

import './WorkflowSelect.css';

const WorkflowSelect = () => {
  const { data, workflow, workItem } = useContext(SessionContext);

  const [formData, setFormData] = data;
  const [showWorkflowSelect, setShowWorkflowSelect] = workflow;
  const [task, setTask] = workItem;

  const handleWorkflow = (item) => {
    console.log('workflow ' + item);
    setTask(item);
    setShowWorkflowSelect(false);
  };

  return (
    <div>
      <div id='top-border'></div>
      {showWorkflowSelect !== false && (
        <div id='main-body'>
          <div id='primary-btns'>
            <Button
              margin='0 5px 0 0'
              color='rgba(0, 180, 249, 0.872)'
              label='New Form'
              callback={() => handleWorkflow('new')}
            />
            <Button
              margin='0 0 0 5px'
              color='rgba(0, 180, 249, 0.872)'
              label='Edit Existing'
              callback={() => handleWorkflow('edit')}
            >
              Edit Existing
            </Button>
          </div>

          <div id='bottom-border'></div>
        </div>
      )}
    </div>
  );
};

export default WorkflowSelect;
