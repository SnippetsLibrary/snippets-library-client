import { useLocation, useNavigate } from 'react-router-dom'

import { E_HeaderLinks, headerLinks } from './data'
import * as S from './styles'

import { useStoreSelector } from 'src/hooks/useStoreSelector'
import { ROUTES } from 'src/utils/constants/routes'
import { LocalStorage } from 'src/utils/helpers/localStorage'

export const MainHeader = () => {
  const userName = useStoreSelector((state) => state.user.userName)

  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    LocalStorage.deleteAuthToken()
    navigate('/', { replace: true })
    window.location.reload()
  }

  const Actions = {
    [E_HeaderLinks.search]: ROUTES.search,
    [E_HeaderLinks.community]: ROUTES.community,
    [E_HeaderLinks.profile]: `/${userName}`,
  }

  return (
    <S.Header>
      <S.HeaderInner>
        <S.MainNavLink to={ROUTES.userHome}>Snippets</S.MainNavLink>
        <S.UnorderedList>
          {headerLinks.map((link, index) => {
            return (
              <S.ListItem location={location.pathname.includes(link.leadsTo)} key={index}>
                <S.NavLink to={Actions[link.leadsTo]}>{link.label}</S.NavLink>
              </S.ListItem>
            )
          })}
        </S.UnorderedList>
      </S.HeaderInner>
      <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
    </S.Header>
  )
}
