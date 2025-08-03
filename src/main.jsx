import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductsContext';
import './index.css'
import App from './App.jsx'
import {ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ThemeProvider>
    <UserProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
    </UserProvider>
    </ThemeProvider>
   
  </StrictMode>,
)
