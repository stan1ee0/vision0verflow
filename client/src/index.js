import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

export const serverUrl = process.env.REACT_APP_SERVER || 'http://localhost:8080';
export const chatgptUrl = 'https://api.openai.com/v1/chat/completions';
export const chatgptKey = process.env.REACT_APP_OPENAI_API_KEY;

export const getAvatarUrl = (userId) => {
  if (userId == 1) {
    return 'https://s3.amazonaws.com/comicgeeks/characters/avatars/1616.jpg?t=1687973152';
  }
  if (userId == 2) {
    return 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
  }
  return 'https://avatars.githubusercontent.com/u/124579215?v=4'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
