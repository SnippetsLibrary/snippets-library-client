import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1440px;
  height: min-content;
  padding: 20px 0px 50px;

  font-size: 80px;
  font-weight: 700;
  letter-spacing: -3px;
`

export const ContentText = styled.div`
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

  margin-bottom: 64px;

  color: ${({ theme }) => theme.colors.welcome.navLink};
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    gap: 32px;
  }
`

export const ContentImages = styled(motion.div)`
  cursor: pointer;
`
