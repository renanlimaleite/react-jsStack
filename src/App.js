import { ThemeProvider } from 'styled-components'
import defaultTheme from './assets/themes/default'
import GlobalStyles from './assets/styles/global'

function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Oi</h1>
    </ThemeProvider>
  )
}

export default App
