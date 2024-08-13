import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import 'primeicons/primeicons.css'
import { PrimeReactProvider } from 'primereact/api'
import 'primeflex/primeflex.css'  
import 'primereact/resources/primereact.css'
import ScrollToTop from './components/ScrollToTop'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
