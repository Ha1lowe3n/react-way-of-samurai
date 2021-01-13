import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App';

const dialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Oleg" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Valera" },
];

const messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "What's up?" },
];

const postsData = [
  { id: 1, message: "Hello", likeCount: "9" },
  { id: 2, message: "Hi", likeCount: "7" },
];

// hello

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        dialogs={dialogsData}
        messages={messagesData}
        posts={postsData}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


