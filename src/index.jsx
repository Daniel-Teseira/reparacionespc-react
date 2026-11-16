import React from 'react';
import ReactDOM from 'react-dom/client';
import './base.css';
import App from './App';
import { Router } from './router';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
</React.StrictMode>
);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
