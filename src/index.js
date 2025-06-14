// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Ensure the root element exists
const container = document.getElementById('root');
if (!container) {
  throw new Error("No root element found. Make sure there's a <div id='root'></div> in your index.html.");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
