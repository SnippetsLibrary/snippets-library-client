import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Library = styled.div`
  max-width: auto;

  color: ${({ theme }) => theme.colors.library.mainTextColor};
`
interface I_LibraryInnerProps {
  $type: boolean
}

export const LibraryInner = styled.div<I_LibraryInnerProps>`
  padding-top: 8rem;
  padding-bottom: 4rem;

  background-color: ${({ theme, $type }) =>
    $type ? theme.colors.library.background : theme.colors.library.backgroundSecondary};
`

interface I_LibraryMainBoxProps {
  $type: boolean
}

export const LibraryMainBox = styled(motion.div)<I_LibraryMainBoxProps>`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: ${({ $type }) => ($type ? 'flex-start' : 'flex-end')};

  max-width: 1366px;
  margin: 0 auto;
  padding: 48px;
`

interface I_LibraryTitleBoxProps {
  $type: boolean
}

export const LibraryTitleBox = styled(motion.div)<I_LibraryTitleBoxProps>`
  width: 100%;
  max-width: ${({ $type }) => ($type ? 'auto' : '525px')};
`

export const LibraryTitle = styled.h1`
  width: 100%;
  max-width: 480px;

  font-size: 96px;
`

interface I_LibraryLabelProps {
  $type: boolean
}

export const LibraryLabel = styled.div<I_LibraryLabelProps>`
  background: ${({ theme, $type }) =>
    $type ? theme.colors.library.mainTitle : theme.colors.library.mainTitleSecond};
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
