import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  gap: 24px;
  align-items: center;

  width: 100%;
  max-width: 100%;
  height: 80px;
  max-height: 80px;
  padding: 0 24px;

  color: ${({ theme }) => theme.colors.headerNavigation};

  background: ${({ theme }) => theme.colors.headerBackground};
`

export const MainNavLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.headerNavigation};
  text-decoration: none;
`

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.headerNavLink};
  text-decoration: none;

  transition: all 0.3s ease;
`

export const UnorderedList = styled.ul`
  display: flex;
  gap: 24px;
`

interface ListItemProps {
  location: boolean
}

export const ListItem = styled.li<ListItemProps>`
  a {
    color: ${({ theme, location }) =>
      location ? theme.colors.headerNavLinkActive : theme.colors.headerNavLink};
  }
`
