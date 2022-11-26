import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Baloo 2', cursive;
  }
  body {
    background-color: #1a1b23;
    height: 100vh;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
