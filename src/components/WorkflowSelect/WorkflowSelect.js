import React, { useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';

import Button from '../Button/Button';

import './WorkflowSelect.css';

const tempFormData = {
  name: 'Test Form',
  questions: [
    { type: 'input', question: 'This is a test' },
    {
      type: 'select',
      question: 'What was the weather like?',
      options: ['Warm', 'Raining', 'Cold'],
    },
    {
      type: 'yes-no',
      question: 'Should this store be visited again?',
    },
  ],
};

const WorkflowSelect = () => {
  const { data, workflow, workItem } = useContext(SessionContext);

  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = data;
  const [showWorkflowSelect, setShowWorkflowSelect] = workflow;
  // eslint-disable-next-line no-unused-vars
  const [task, setTask] = workItem;

  const handleWorkflow = (item) => {
    if (item === 'edit') {
      setFormData(tempFormData);
    }
    if (item === 'new') {
      setFormData('');
    }
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
