import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {DataLayer} from './DataLayer'
import {initial,reducer} from './reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataLayer initial={initial} reducer={reducer}>
    <App />
    </DataLayer>
  </React.StrictMode>
);

