import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';   // <-- this is where the error comes from

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
