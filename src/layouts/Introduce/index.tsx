import { ReactNode } from 'react'

import { IntroduceHeader } from './components/Header'
import * as S from './styles'

import * as C from 'src/styles/components'

interface I_IntroduceLayoutProps {
  children: ReactNode
}

export const IntroduceLayout = ({ children }: I_IntroduceLayoutProps) => {
  return (
    <S.IntroduceLayout>
      <IntroduceHeader />
      <C.Divider />
      <S.IntroduceInner>{children}</S.IntroduceInner>
    </S.IntroduceLayout>
  )
}
