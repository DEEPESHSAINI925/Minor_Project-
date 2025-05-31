import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContext from './Context/UserContext.jsx'
import LawyerContext from './Context/LawyerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <UserContext>
      <LawyerContext>
        <App />
      </LawyerContext>
    </UserContext>
  </StrictMode>
)