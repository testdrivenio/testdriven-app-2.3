import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';  // new

import App from './App.jsx';

ReactDOM.render((
  // new
  <Router>
    <App />
  </Router>
), document.getElementById('root'))
