// css stylesheets
import "../styles/globals.css";
// MUI theme components
import { createTheme, ThemeProvider } from "@mui/material/styles";
// MUI color

import type { AppProps } from "next/app";

const unicoReptilesTheme = createTheme({
  palette: {
    primary: {
      light: '#1c1c1c',
      main: '#141414',
      dark: '#0a0a0a',
    },
    secondary: {
      light: '#f21000',
      main: '#de0f00',
      dark: '#c90d00',
    },
    error: {
      light: '#ff001e',
      main: '#ff0f23',
      dark: '#b80015',
    },
    warning: {
      light: '#f28100',
      main: '#e86500',
      dark: '#e84600',
    },
    info: {
      light: '#8cddff',
      main: '#54b5ff',
      dark: '#2889d4',
    },
    success: {
      light: '#74f518',
      main: '#46d916',
      dark: '#16ad2a',
    }
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <ThemeProvider theme={unicoReptilesTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
