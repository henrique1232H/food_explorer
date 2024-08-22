import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme.js'
import Global from './style/global.js'
import Routes from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <Global />
      <Routes />
    </ThemeProvider>
   
  </React.StrictMode>,
)
