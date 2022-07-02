import { I_Theme } from 'src/typings/interfaces/styled'

export const theme: I_Theme = {
  colors: {
    header: {
      navigation: 'hsl(0, 0%, 100%)',
      navigationWelcome: 'hsl(0, 0%, 10%)',
      navigationWelcomeTryIt: 'hsl(0, 0%, 100%)',
      navLink: 'hsla(0, 0%, 100%, 0.5)',
      navLinkActive: 'hsl(0, 0%, 100%)',
      background: 'hsl(0, 0%, 10%)',
      backgroundTransparent: 'transparent',
      backgroundHover: '#313131',
    },
    welcome: {
      navLink: 'rgba(0, 136, 255, 1)',
    },
    library: {
      background: 'hsl(0, 0%, 10%)',
      backgroundSecondary: '#111',
      mainTitle: 'linear-gradient(145deg, #15b, #e234)',
      mainTitleSecond: '#9C1BFF',
      mainTitleHover: '#00A3FF',
      mainTextColor: 'hsl(0, 0%, 100%)',
    },
    auth: {
      navLink: 'rgba(0, 136, 255, 1)',
      backgroundTransparent: 'transparent',
    },
  },
}
