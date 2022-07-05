import { ReactNode } from 'react'

import { MainHeader } from './components/Header'
import * as S from './styles'

import * as C from 'src/styles/components'

interface I_Authorized {
  children: ReactNode
}

export const MainLayout = ({ children }: I_Authorized) => {
  return (
    <S.AuthorizedLayout>
      <MainHeader />
      <C.Divider />
      {children}
    </S.AuthorizedLayout>
  )
}
