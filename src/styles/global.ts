import { createGlobalStyle } from 'styled-components'

import { Fonts } from './fonts'

export const GlobalStyles = createGlobalStyle`
  ${Fonts}

  #root {
    width: 100%;
    height: 100%;
  }

  html,
  body {
    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    

    font-family: GTWalsheimPro, sans-serif;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }
`
