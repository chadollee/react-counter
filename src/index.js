// Importing React allows us to use JSX
import React from 'react';
// This allows us to mount our react application inside the browser
import ReactDOM from 'react-dom';
// loads the main css file at the highest point of the application
import './index.css';
// React Component = mount this component at the top level
import App from './App';
// production caching
import * as serviceWorker from './serviceWorker';

// ReactDOM.render takes in 2 params.
  // 1) component to mount
  // 2) the element in the DOM to mount the component to
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If we are in production, register the service worker to the browser
serviceWorker.unregister();
