import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const rootUrl = process.env.REACT_APP_HOST || 'http://localhost:8080';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
