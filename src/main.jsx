import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraBaseProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ChakraBaseProvider>
  </BrowserRouter>,
)
