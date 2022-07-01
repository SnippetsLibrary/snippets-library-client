import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Content = styled(motion.div)`
  overflow: visible;

  max-width: 1440px;
  height: min-content;
  padding: 120px 0px 150px;

  font-size: 80px;
  font-weight: 700;
  letter-spacing: -3px;
`

export const ContentText = styled.div`
  overflow: visible;

  width: 660px;
  height: auto;

  text-align: center;
`

export const Text = styled.span`
  height: 100%;
`

export const TryForFreeLink = styled(Link)`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.contentNavLink};
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    gap: 32px;
  }
`
