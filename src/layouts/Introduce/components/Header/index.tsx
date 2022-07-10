import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { headerLinks, menuLinks } from './data'
import * as S from './styles'
import { animation } from './variants'

import * as MS from 'src/layouts/styles'
import { ROUTES } from 'src/utils/constants/routes'

export const IntroduceHeader = () => {
  const [menu, setMenu] = useState<boolean>(false)

  const location = useLocation()

  const handleMenuToggle = () => {
    setMenu((prev) => !prev)
  }

  const handleMenuClose = () => {
    setMenu(false)
  }

  return (
    <S.Header>
      <S.HeaderInner>
        <S.MainNavLink to={ROUTES.home}>Snippets</S.MainNavLink>
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
        {menu && <MS.PopoverOverlay onClick={handleMenuClose} />}
        <MS.More onClick={handleMenuToggle}>
          {menu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </MS.More>
        <MS.Popover animate={menu ? animation.open : animation.closed} variants={animation}>
          {menuLinks.map((link, index) => {
            return (
              <MS.MoreNavLink onClick={handleMenuClose} key={index} to={link.leadsTo}>
                {link.label}
              </MS.MoreNavLink>
            )
          })}
        </MS.Popover>
      </MS.HeaderMore>
    </S.Header>
  )
}
