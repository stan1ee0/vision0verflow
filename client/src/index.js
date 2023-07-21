import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

export const serverUrl = process.env.REACT_APP_HOST || 'http://localhost:8080';
export const chatgptUrl = 'https://api.openai.com/v1/chat/completions';
export const chatgptKey = process.env.REACT_APP_OPENAI_API_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
