import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// HAPUS import BrowserRouter di sini!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HAPUS BrowserRouter dan basename. Cukup panggil App saja */}
    <App />
  </React.StrictMode>,
)