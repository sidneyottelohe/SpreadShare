import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Store from './Store'

ReactDOM.render(
  <App store={Store}/>,
  document.getElementById('root')
);
