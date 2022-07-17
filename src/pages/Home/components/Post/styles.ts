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
  outline: 1px solid #eaeaea;
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
  color: rgb(98, 112, 112);
`

export const PostUserLink = styled.a`
  font-size: 16px;
  color: rgb(98, 112, 112);
  text-decoration: none;
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
