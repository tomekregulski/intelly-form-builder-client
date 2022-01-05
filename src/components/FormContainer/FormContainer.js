import React, { useState, useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';

import Input from '../Input/Input';
import MultiSelect from '../MultiSelect/MultiSelect';
import YesNoSelect from '../YesNoSelect/YesNoSelect';

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

  const handleSave = () => {
    alert('Functionality Coming Soon');
  };

  const handleCancel = () => {
    setTask('');
    setShowWorkflowSelect(true);
  };

  const saveElement = () => {
    setShow(false);
    setFormData((prevState) => [...prevState, 'save']);
  };

  const cancelElement = () => {
    setShow(false);
  };

  const renderInput = (item, index) => {
    return <Input key={index} label={item.question} />;
  };

  const renderSelect = (item, index) => {
    return (
      <MultiSelect key={index} options={item.options} label={item.question} />
    );
  };

  const renderYesNo = (item, index) => {
    return <YesNoSelect key={index} label={item.question} />;
  };

  return (
    <div>
      {showWorkflowSelect === false && (
        <div id='form-container'>
          <div>
            <Input
              label='Name of Form: '
              placeholder={formData.name ? formData.name : ''}
            />
            <div id='form'>
              {task === 'new' && (
                <>
                  <Button
                    color='rgba(0, 180, 249, 0.872)'
                    margin='15px 0 15px 0'
                    label='Add New Element'
                    callback={() => setShow(true)}
                  ></Button>
                  <Modal
                    show={show}
                    onSave={() => saveElement()}
                    onCancel={() => cancelElement()}
                    buttons={[
                      {
                        type: 'save',
                        callback: 'onClose',
                        margin: '0 5px 0 0',
                      },
                      { type: 'cancel', callback: 'onCancel', margin: 0 },
                    ]}
                    title='Add a New Element'
                  >
                    <>
                      <NewElement />
                    </>
                  </Modal>
                </>
              )}
            </div>

            <div id='form-body'>
              {formData.questions &&
                formData.questions.map((item, index) => {
                  switch (item.type) {
                    case 'input':
                      return renderInput(item, index);
                    case 'select':
                      return renderSelect(item, index);
                    case 'yes-no':
                      return renderYesNo(item, index);
                    default:
                      return <div key={index}>{item.question}</div>;
                  }
                })}
            </div>
          </div>

          <div id='control-buttons'>
            <Button
              color='rgba(0, 180, 249, 0.872)'
              margin='0 5px 0 0'
              label='Save Form'
              callback={() => handleSave()}
            />
            <Button
              color='rgba(0, 180, 249, 0.872)'
              margin='0 0 0 5px'
              label='Cancel'
              callback={() => handleCancel()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormContainer;
