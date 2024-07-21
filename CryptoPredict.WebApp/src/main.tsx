import React from 'react';
import { render } from 'react-dom';
import App from './app/App.tsx';

const root = document.getElementById('root');
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
);
