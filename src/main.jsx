import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GloblaStyle } from './style.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GloblaStyle/>
  </React.StrictMode>,
)
