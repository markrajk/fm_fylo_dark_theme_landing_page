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
        background-color: ${theme.color.darkMain};
        font-family: ${theme.font.family.body};
        color: ${theme.color.white};
        line-height: 1.5;
        font-weight: ${theme.font.weight.regular};
    }
`

export default GlobalStyle;