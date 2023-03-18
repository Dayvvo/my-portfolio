import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color:'',
        minHeight:'100vh',
        fontFamily:''
      },
    }),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
