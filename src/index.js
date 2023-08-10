import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routes/routes';
import "animate.css/animate.min.css";
import bootstrap from 'bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

