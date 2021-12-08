import React, { useState, useEffect, createContext } from 'react';

export const SessionContext = createContext();

export const SessionProvider = (props) => {
  const [formData, setFormData] = useState([]);
  const [showWorkflowSelect, setShowWorkflowSelect] = useState(true);
  const [task, setTask] = useState('');

  useEffect(() => {
    if (localStorage.getItem('session')) {
      const data = JSON.parse(localStorage.getItem('session'));
      data.formData && setFormData(data.formData);
    }
  }, []);

  useEffect(() => {
    const session = {
      formData: formData || '',
    };
    localStorage.setItem('session', JSON.stringify(session));
  }, [formData]);

  return (
    <SessionContext.Provider
      value={{
        data: [formData, setFormData],
        workflow: [showWorkflowSelect, setShowWorkflowSelect],
        workItem: [task, setTask],
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};
