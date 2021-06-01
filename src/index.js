import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApiProvider } from './context/apiContext'
import { AuthProvider } from './context/authContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
