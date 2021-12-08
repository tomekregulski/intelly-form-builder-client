import React from 'react';

import Navbar from './components/Navbar/Navbar';
import WorkflowSelect from './components/WorkflowSelect/WorkflowSelect';
import FormContainer from './components/FormContainer/FormContainer';

function App() {
  return (
    <div>
      <Navbar />
      <WorkflowSelect />
      <FormContainer />
    </div>
  );
}

export default App;
