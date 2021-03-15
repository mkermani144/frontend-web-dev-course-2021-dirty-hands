/*
* to solve CORS errors temporarily :
*   ~$ google-chrome --disable-web-security --user-data-dir="[a directory address]"
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);