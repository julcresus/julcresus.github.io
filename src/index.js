import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// Enable service worker for offline support and better performance
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
