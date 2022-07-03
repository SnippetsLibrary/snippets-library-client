import { ReactNode } from 'react'

import * as S from './styles'

interface I_Authorized {
  children: ReactNode
}

export const MainLayout = ({ children }: I_Authorized) => {
  return <S.AuthorizedLayout>{children}</S.AuthorizedLayout>
}
