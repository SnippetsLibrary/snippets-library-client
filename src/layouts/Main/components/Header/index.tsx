import { useLocation, useNavigate } from 'react-router-dom'

import { headerLinks } from './data'
import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'
import { LocalStorage } from 'src/utils/helpers/localStorage'

export const MainHeader = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    LocalStorage.deleteAuthToken()
    navigate('/', { replace: true })
    window.location.reload()
  }

  return (
    <S.Header>
      <S.HeaderInner>
        <S.MainNavLink to={ROUTES.userHome}>Snippets</S.MainNavLink>
        <S.UnorderedList>
          {headerLinks.map((link, index) => {
            return (
              <S.ListItem location={location.pathname.includes(link.leadsTo)} key={index}>
                <S.NavLink to={link.leadsTo}>{link.label}</S.NavLink>
              </S.ListItem>
            )
          })}
        </S.UnorderedList>
      </S.HeaderInner>
      <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
    </S.Header>
  )
}
