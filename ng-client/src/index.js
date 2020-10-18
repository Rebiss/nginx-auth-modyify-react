import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './view/App';
import * as serviceWorker from './service/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
