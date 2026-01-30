import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* basename WAJIB SAMA dengan settingan di vite.config.js tadi */}
    <BrowserRouter basename="/Arif_Portofolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)