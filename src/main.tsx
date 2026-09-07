import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/home.css'
import './styles/site.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
