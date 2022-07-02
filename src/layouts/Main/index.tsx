import { ReactNode } from 'react'

import { Header } from './components/Header'
import * as S from './styles'

import * as C from 'src/styles/components'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.MainLayout>
      <Header />
      <C.Divider />
      <S.Inner>{children}</S.Inner>
    </S.MainLayout>
  )
}
