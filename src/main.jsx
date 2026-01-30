import React from 'react'
import ReactDOM from 'react-dom/client' // <-- Ini yang tadi hilang!
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Pastikan basename sesuai nama repo GitHub Anda */}
    <BrowserRouter basename="/Arif_Portofolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)