import { ReactNode } from 'react'

import { WelcomeHeader } from './components/Header'
import * as S from './styles'

interface I_WelcomeLayoutProps {
  children: ReactNode
}

export const WelcomeLayout = ({ children }: I_WelcomeLayoutProps) => {
  return (
    <S.Welcome>
      <WelcomeHeader />
      {children}
    </S.Welcome>
  )
}
