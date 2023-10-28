
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import './App.css'

import { Router } from './components/Router'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { CyclesContextProvider } from './contexts/CyclesContext'

function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      
        <CyclesContextProvider>
          <Router/>
        </CyclesContextProvider>

      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
    
  )
}

export default App
