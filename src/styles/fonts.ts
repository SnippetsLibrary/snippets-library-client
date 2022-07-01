import { css } from 'styled-components'

import GTWalsheimProWoffBlack from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Black.woff'
import GTWalsheimProWoff2Black from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Black.woff2'
import GTWalsheimProWoffBold from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Bold.woff'
import GTWalsheimProWoff2Bold from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Bold.woff2'
import GTWalsheimProWoffLight from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Light.woff'
import GTWalsheimProWoff2Light from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Light.woff2'
import GTWalsheimProWoffMedium from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Medium.woff'
import GTWalsheimProWoff2Medium from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Medium.woff2'
import GTWalsheimProWoffRegular from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Regular.woff'
import GTWalsheimProWoff2Regular from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-Regular.woff2'
import GTWalsheimProWoffUltraBold from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-UltraBold.woff'
import GTWalsheimProWoff2UltraBold from 'src/assets/fonts/GTWalsheimPro/GTWalsheimPro-UltraBold.woff2'

export const Fonts = css`
  @font-face {
    font-family: GTWalsheimPro;
    font-weight: 300;
    font-style: normal;
    src: local('GTWalsheimPro'), local('GTWalsheimPro'),
      url(${GTWalsheimProWoff2Light}) format('woff2'), url(${GTWalsheimProWoffLight}) format('woff');
  }

  @font-face {
    font-family: GTWalsheimPro;
    font-weight: 400;
    font-style: normal;
    src: local('GTWalsheimPro'), local('GTWalsheimPro'),
      url(${GTWalsheimProWoff2Regular}) format('woff2'),
      url(${GTWalsheimProWoffRegular}) format('woff');
  }

  @font-face {
    font-family: GTWalsheimPro;
    font-weight: 500;
    font-style: normal;
    src: local('GTWalsheimPro'), local('GTWalsheimPro'),
      url(${GTWalsheimProWoff2Medium}) format('woff2'),
      url(${GTWalsheimProWoffMedium}) format('woff');
  }

  @font-face {
    font-family: GTWalsheimPro;
    font-weight: 600;
    font-style: normal;
    src: local('GTWalsheimPro'), local('GTWalsheimPro'),
      url(${GTWalsheimProWoff2Black}) format('woff2'), url(${GTWalsheimProWoffBlack}) format('woff');
  }

  @font-face {
    font-family: GTWalsheimPro;
    font-weight: 700;
    font-style: normal;
    src: local('GTWalsheimPro'), local('GTWalsheimPro'),
      url(${GTWalsheimProWoff2Bold}) format('woff2'), url(${GTWalsheimProWoffBold}) format('woff');
  }

  @font-face {
    font-family: GTWalsheimPro;
    font-weight: 800;
    font-style: normal;
    src: local('GTWalsheimPro'), local('GTWalsheimPro'),
      url(${GTWalsheimProWoff2UltraBold}) format('woff2'),
      url(${GTWalsheimProWoffUltraBold}) format('woff');
  }
`
