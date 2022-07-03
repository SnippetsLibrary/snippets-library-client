import { ReactNode } from 'react'

import { MainHeader } from './components/Header'
import * as S from './styles'

interface I_Authorized {
  children: ReactNode
}

export const MainLayout = ({ children }: I_Authorized) => {
  return (
    <S.AuthorizedLayout>
      <MainHeader />
      {children}
    </S.AuthorizedLayout>
  )
}
