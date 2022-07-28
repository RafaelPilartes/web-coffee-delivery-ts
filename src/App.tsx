import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import reactLogo from './assets/react.svg'
import { CartContextProvider } from './context/CartContext'
import { AppProvider } from './provider/AppProvider'
import { Router } from './routes/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

function App() {
  return (
    <AppProvider>
      <CartContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </CartContextProvider>
    </AppProvider>
  )
}

export default App
