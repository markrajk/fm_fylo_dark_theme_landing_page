import { createGlobalStyle } from "styled-components";
import theme from './theme'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1rem;
        background-color: ${theme.colors.background};
    }
`

export default GlobalStyle;