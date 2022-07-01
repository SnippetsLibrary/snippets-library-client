import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Library = styled.div`
  max-width: auto;

  color: ${({ theme }) => theme.colors.library.mainTextColor};
`

export const LibraryInner = styled.div`
  padding-top: 8rem;
  padding-bottom: 4rem;

  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.library.backgroundSecondary};
  }
`

interface LibraryMainBoxProps {
  type: boolean
}

export const LibraryMainBox = styled(motion.div)<LibraryMainBoxProps>`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: ${({ type }) => (type ? 'flex-start' : 'flex-end')};

  max-width: 1000px;
  margin: 0 auto;
`

interface LibraryTitleBoxProps {
  type: boolean
}

export const LibraryTitleBox = styled(motion.div)<LibraryTitleBoxProps>`
  width: 100%;
  max-width: ${({ type }) => (type ? 'auto' : '525px')};
`

export const LibraryTitle = styled.h1`
  width: 100%;
  max-width: 480px;

  font-size: 96px;
`

interface LibraryLabelProps {
  type: boolean
}

export const LibraryLabel = styled.div<LibraryLabelProps>`
  background: ${({ theme, type }) =>
    type ? theme.colors.library.mainTitle : theme.colors.library.mainTitleSecond};
  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;
`

export const LibraryDescriptionBox = styled(motion.div)``

export const LibraryDescription = styled.p`
  max-width: 525px;

  font-size: 28px;
  font-weight: 500;
  line-height: 1.5;
`

export const LibraryLink = styled(Link)`
  display: flex;
  gap: 12px;
  align-items: center;

  margin-bottom: 64px;

  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.library.mainTitleSecond};
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.library.mainTitleHover};
  }
`
