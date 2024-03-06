import App from '@/App.tsx'
import Provider from '@/state/Provider'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

const root = document.getElementById('root')

if (root === null) {
  throw new Error('root element not found')
}

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 16,
    h1: {
      fontSize: '2.5rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.75rem'
    },
    h4: {
      fontSize: '1.5rem'
    },
    h5: {
      fontSize: '1.25rem'
    },
    h6: {
      fontSize: '1rem'
    }
  }
})
ReactDOM.createRoot(root).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider>
        <App />
        <CssBaseline />
      </Provider>
    </ThemeProvider>
  </StrictMode>
)
