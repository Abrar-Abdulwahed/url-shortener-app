import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Router,  Routes, RouterProvider} from 'react-router-dom'

// import Homepage from './pages/Homepage';
// import App from './App';
import router from './router'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
