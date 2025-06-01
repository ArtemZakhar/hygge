import React from 'react';
import ReactDOM from 'react-dom/client';

import { Root } from './Root';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
import Providers from './utilities/Providers';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Providers>
      <Root />
    </Providers>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
