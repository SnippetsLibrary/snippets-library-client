import AddRoundedIcon from '@mui/icons-material/AddRounded'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { E_MenuLinks, headerLinks, menuLinks } from './data'
import * as S from './styles'
import { animation } from './variants'

import { useStoreDispatch } from 'src/hooks/useStoreDispatch'
import { useStoreSelector } from 'src/hooks/useStoreSelector'
import * as MS from 'src/layouts/styles'
import { signOut } from 'src/store/auth'
import * as C from 'src/styles/components'
import { ROUTES } from 'src/utils/constants/routes'

export const MainHeader = () => {
  const [menu, setMenu] = useState<boolean>(false)

  const userName = useStoreSelector((state) => state.user.userName)
  const dispatch = useStoreDispatch()
  const location = useLocation()

  console.log(location)

  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(signOut())
    navigate('/', { replace: true })
    window.location.reload()
  }

  const handleMenuToggle = () => {
    setMenu((prev) => !prev)
  }

  const handleMenuClose = () => {
    setMenu(false)
  }

  const MenuLinksActions = {
    [E_MenuLinks.profile]: `/${userName}`,
    [E_MenuLinks.settings]: `/${userName}/settings`,
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
      <MS.HeaderMore>
        <S.NavLink to={ROUTES.createPost}>
          <S.PlusButtonBox>
            <AddRoundedIcon fontSize='large' />
          </S.PlusButtonBox>
        </S.NavLink>
        {menu && <MS.PopoverOverlay onClick={handleMenuClose} />}
        <MS.More onClick={handleMenuToggle}>
          {menu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </MS.More>
        <MS.Popover animate={menu ? animation.open : animation.closed} variants={animation}>
          <S.ProfileLabel>{userName}</S.ProfileLabel>
          <C.Divider />
          <MS.PopoverBox>
            {menuLinks.map((link, index) => {
              return (
                <MS.MoreNavLink
                  onClick={handleMenuClose}
                  key={index}
                  to={MenuLinksActions[link.leadsTo]}
                >
                  {link.label}
                </MS.MoreNavLink>
              )
            })}
            <S.LogoutButton onClick={handleLogout}>Sign out</S.LogoutButton>
          </MS.PopoverBox>
        </MS.Popover>
      </MS.HeaderMore>
    </S.Header>
  )
}
