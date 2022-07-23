import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Post = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 9px;

  width: 100%;
  padding: 18px 38px;

  background-color: #fff;
  border-radius: 12px;
  outline: 1px solid #8888;
`

export const Box = styled.div``

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const PostTitle = styled.h2`
  font-size: 24px;
`

export const PostSubtitle = styled.p`
  font-size: 18px;
  color: #fff;
`

export const PostLink = styled(Link)`
  color: #888787;
  text-decoration: none;
  text-transform: capitalize;
`

export const PostTitleLink = styled(Link)`
  color: #000;
  text-decoration: none;
  text-transform: none;
`

export const VoteBox = styled.div`
  position: absolute;
  top: 50%;
  right: 38px;
  transform: translate(0, -50%);

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  background-color: transparent;
`

export const VoteButton = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;

  background-color: transparent;
  border: none;
  outline: none;
`

export const VoteLabel = styled.span``
