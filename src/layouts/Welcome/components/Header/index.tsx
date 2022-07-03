import { useLocation } from 'react-router-dom'

import { headerWelcomeLinks } from './data'
import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

export const WelcomeHeader = () => {
  const location = useLocation()

  return (
    <S.Header>
      <S.Box
        initial={{ opacity: 0 }}
        style={{ y: 32 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <S.MainNavLink to={ROUTES.home}>Snippets Library</S.MainNavLink>
      </S.Box>
      <S.Box
        initial={{ opacity: 0 }}
        style={{ x: 32 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <S.UnorderedList>
          {headerWelcomeLinks.map((link, index) => {
            return (
              <S.ListItem location={location.pathname.includes(link.leadsTo)} key={index}>
                <S.NavLink to={link.leadsTo}>{link.label}</S.NavLink>
              </S.ListItem>
            )
          })}
        </S.UnorderedList>
        <S.TryItLink to={ROUTES.auth}>Try for free</S.TryItLink>
      </S.Box>
    </S.Header>
  )
}
