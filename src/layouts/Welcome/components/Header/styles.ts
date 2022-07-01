import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;

  overflow: visible;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 100%;
  height: 80px;
  max-height: 80px;
  padding: 0 24px;

  color: ${({ theme }) => theme.colors.header.navigationWelcome};

  background: ${({ theme }) => theme.colors.header.backgroundTransparent};
`

export const Box = styled(motion.div)`
  display: flex;
  gap: 24px;
  align-items: center;

  height: 100%;
`

export const MainNavLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.header.navigationWelcome};
  text-decoration: none;
`

export const TryItLink = styled(Link)`
  padding: 9px 16px;

  font-size: 18px;
  color: ${({ theme }) => theme.colors.header.navigationWelcomeTryIt};
  text-decoration: none;

  background-color: #08f;
  filter: brightness(1);
  border: 0;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 0px 0px inset, rgb(7 136 255 / 25%) 0px 2px 4px 0px;
`

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.header.navigationWelcome};
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

export const ListItem = styled.li<ListItemProps>``
