import { useLocation } from 'react-router-dom'

import { headerLinks } from './data'
import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

export const Header = () => {
  const location = useLocation()

  return (
    <S.Header>
      <S.MainNavLink to={ROUTES.welcome}>Snippets</S.MainNavLink>
      <S.UnorderedList>
        {headerLinks.map((link, index) => {
          return (
            <S.ListItem location={location.pathname.includes(link.leadsTo)} key={index}>
              <S.NavLink to={link.leadsTo}>{link.label}</S.NavLink>
            </S.ListItem>
          )
        })}
      </S.UnorderedList>
    </S.Header>
  )
}
