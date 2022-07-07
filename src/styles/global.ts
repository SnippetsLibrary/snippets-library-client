import { createGlobalStyle } from 'styled-components'

import { Fonts } from './fonts'

export const GlobalStyles = createGlobalStyle`
  ${Fonts}

  html,
  body {
    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    
    
    font-family: GTWalsheimPro, sans-serif;
    font-size: 16px;
    
    background-color: #111;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    font-family: GTWalsheimPro, sans-serif;
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
