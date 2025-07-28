import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './context/UserContext';
import { ProductProvider } from './context/ProductsContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
    </UserProvider>
  </StrictMode>,
)
