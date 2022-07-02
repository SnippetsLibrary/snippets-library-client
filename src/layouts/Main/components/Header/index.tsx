import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { headerLinks, menuLinks } from './data'
import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

const visible = {
  hidden: {
    y: 12,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const hidden = {
  hidden: {
    y: -6,
    opacity: 0,
  },
  visible: {
    y: -6,
    opacity: 0,
  },
}

export const Header = () => {
  const [menu, setMenu] = useState<boolean>(false)

  const location = useLocation()

  const handleMore = () => {
    setMenu((prev) => !prev)
  }

  const handleMoreClose = () => {
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
        {menu && <S.PopoverOverlay onClick={handleMoreClose} />}
        <S.More onClick={handleMore}>
          {menu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </S.More>
        <S.Popover
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }}
          variants={menu ? visible : hidden}
        >
          {menuLinks.map((link, index) => {
            return (
              <S.MoreNavLink key={index} to={link.leadsTo}>
                {link.label}
              </S.MoreNavLink>
            )
          })}
        </S.Popover>
      </S.HeaderMore>
    </S.Header>
  )
}
