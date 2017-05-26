import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Store from './data/Store'
import ViewStore from './data/ViewStore'

ReactDOM.render(
  <App store={Store} viewStore={ViewStore}/>,
  document.getElementById('root')
);
