import 'styled-components'

import { I_Theme } from './typings/interfaces/styled'

declare module 'styled-components' {
  export interface DefaultTheme extends I_Theme {}
}
