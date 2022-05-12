import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../assets/themes/default'
import GlobalStyles from '../../assets/styles/global'
import { Container } from './styles'
import { Header } from '../Header'
import { ContactsList } from '../ContactsList'

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  )
}
