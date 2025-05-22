import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import api from '../api';

// Set up axios defaults
api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
api.defaults.withCredentials = true;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
