import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import StoreContextProvider from "./context/StoreContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <StoreContextProvider>
              <App />
          </StoreContextProvider>
      </BrowserRouter>
  </StrictMode>,
)
