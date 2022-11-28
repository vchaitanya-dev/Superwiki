import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HeroProvider } from './Context/HeroContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroProvider>
    <App />
    </HeroProvider>
  </React.StrictMode>
);

