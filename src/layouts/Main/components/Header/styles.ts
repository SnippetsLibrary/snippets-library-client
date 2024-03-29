import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 100%;
  height: 80px;
  max-height: 80px;
  padding: 0 24px;

  color: ${({ theme }) => theme.colors.header.navigation};

  background: ${({ theme }) => theme.colors.header.background};
`

export const HeaderInner = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  height: 100%;
`

export const MainNavLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.auth.navLink};
  text-decoration: none;
`

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  transition: all 0.3s ease;
`

export const UnorderedList = styled.ul`
  display: flex;
  gap: 6px;
`

interface ListItemProps {
  location: boolean
}

export const ListItem = styled.li<ListItemProps>`
  a {
    padding: 9px 16px;

    color: ${({ theme, location }) =>
      location ? theme.colors.header.navLinkActive : theme.colors.header.navLink};

    border-radius: 12px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.header.backgroundHover};
    }
  }
`

export const LogoutButton = styled.button`
  cursor: pointer;

  padding: 6px 28px;

  font-size: 16px;
  font-weight: 400;
  color: #c5d3d3;
  text-align: start;
  text-decoration: none;
  white-space: nowrap;

  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    background-color: #494949;
  }
`

export const ProfileLabel = styled.span`
  padding: 9px 28px;

  font-size: 16px;
  font-weight: 400;
  color: #c5d3d3;
  text-decoration: none;
  white-space: nowrap;

  box-shadow: none;
`
export const PlusButtonBox = styled.div`
  margin: 0 3rem;
  padding: 0.5rem 0.5rem 0.2rem;

  color: #fff;

  background-color: #555;
  border-radius: 50%;
`
