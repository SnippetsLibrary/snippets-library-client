import { ReactNode } from 'react'

import { WelcomeHeader } from './components/Header'
import * as S from './styles'

interface WelcomeLayoutProps {
  children: ReactNode
}

export const WelcomeLayout = ({ children }: WelcomeLayoutProps) => {
  return (
    <S.Welcome>
      <WelcomeHeader />
      {children}
    </S.Welcome>
  )
}
