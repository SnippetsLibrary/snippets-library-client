import { ReactNode } from 'react'

import { Header } from './components/Header'
import * as S from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.MainLayout>
      <Header />
      {children}
    </S.MainLayout>
  )
}
