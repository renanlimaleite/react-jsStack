import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../assets/themes/default'
import GlobalStyles from '../../assets/styles/global'
import { Container } from './styles'
import { Header } from '../Header'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '../../Routes'

export function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}
