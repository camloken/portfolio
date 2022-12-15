import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// This is the magic helper I'll explain shortly
// import ScrollToTop from "./helpers/ScrollToTop";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ScrollToTop /> */}
    <App />
  </React.StrictMode>
)
