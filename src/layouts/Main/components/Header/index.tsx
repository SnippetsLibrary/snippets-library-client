import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { headerLinks, menuLinks } from './data'
import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -6,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const Header = () => {
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
      </S.HeaderInner>
      <S.HeaderMore>
        {menu && <S.PopoverOverlay onClick={handleMenuClose} />}
        <S.More onClick={handleMenuToggle}>
          {menu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </S.More>
        <S.Popover animate={menu ? variants.open : variants.closed} variants={variants}>
          {menuLinks.map((link, index) => {
            return (
              <S.MoreNavLink onClick={handleMenuClose} key={index} to={link.leadsTo}>
                {link.label}
              </S.MoreNavLink>
            )
          })}
        </S.Popover>
      </S.HeaderMore>
    </S.Header>
  )
}
