import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './contexts/auth/AuthContext.tsx'
import { CartProvider } from './contexts/provider_car/CartContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CartProvider>
  </StrictMode>,
)
