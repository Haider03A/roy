import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './router/Routes.jsx';

import { Provider } from 'react-redux'
import { store } from './app/store.js';

import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
  </React.StrictMode>,
)
