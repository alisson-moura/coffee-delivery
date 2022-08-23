import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CartProvider } from './contexts/cart'
import { Router } from './Router'

export function App () {
  return (
    <ThemeProvider theme={defaultTheme} >
      <CartProvider>
        <Router />
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
