import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/global'
import theme from '@/styles/theme'

import { Layout } from '@/components'



export default function MyApp({ Component, pageProps }) {

  return <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
  <Layout>
    <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
  </>
}
