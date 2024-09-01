import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme.js'
import Global from './style/global.js'
import Routes from './routes/index.jsx'
import { AuthProvider } from './hooks/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <Global />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
   
  </React.StrictMode>,
)
