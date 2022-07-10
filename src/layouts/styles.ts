import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderMore = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  height: 100%;
`

export const More = styled.button`
  cursor: pointer;

  right: 32px;

  color: #fff;

  background-color: ${({ theme }) => theme.colors.header.backgroundTransparent};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.header.backgroundTransparent};
  }
`

export const PopoverOverlay = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  opacity: 0;
`

export const Popover = styled(motion.div)`
  position: fixed;
  z-index: 100;
  top: 60px;
  right: 16px;

  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 124px;
  max-height: 100vh;
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.header.navigation};
  border-radius: 12px;
  box-shadow: 0px 0px 15px 0 rgb(0 0 0 / 12%);
`

export const MoreNavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.header.background};
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    color: #9c1bff;
  }
`
