import { motion } from 'framer-motion'
import styled from 'styled-components'

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  padding: 32px 36px;

  background-color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`

export const PostTitle = styled.h1`
  color: #000;
  word-break: break-word;
`

export const PostButtonGroup = styled.div`
  position: relative;

  width: fit-content;
`

export const PostButton = styled.button`
  cursor: pointer;

  background-color: transparent;
  border: 0;
  outline: 0;

  svg {
    fill: hsl(205, 46%, 32%);

    &:hover {
      fill: hsl(205, 36%, 53%);
    }
  }
`

export const PostSharePopover = styled(motion.div)`
  position: absolute;
  z-index: 100;
  top: 48px;
  left: 0;

  overflow-y: hidden;
  display: flex;
  flex-direction: column;

  width: fit-content;
  max-width: 256px;
  max-height: 100vh;

  background-color: #222828;
  border-radius: 9px;
  box-shadow: 0px 0px 15px 0 rgb(0 0 0 / 12%);
`

export const PostSharePopoverBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 12px 0;
`

export const PostShareLink = styled.a`
  cursor: pointer;

  padding: 6px 28px;

  font-size: 16px;
  font-weight: 400;
  color: #c5d3d3;
  text-decoration: none;
  white-space: nowrap;

  box-shadow: none;

  &:hover {
    background-color: #494949;
  }
`
