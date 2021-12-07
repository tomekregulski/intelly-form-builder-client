import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SessionProvider } from './context/SessionContext';

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
