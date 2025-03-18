// Entry point of the React application
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Global styles including Tailwind CSS
import './index.css'

// Create and render the root React component with StrictMode for additional development checks
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
