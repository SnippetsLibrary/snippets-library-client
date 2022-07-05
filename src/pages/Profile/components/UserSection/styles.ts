import styled from 'styled-components'

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 100%;
  max-width: 324px;
`
export const UserAvatar = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: 324px;

  background-color: #fff;
  border-radius: 50%;
`

export const UserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserName = styled.span`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.25;
  color: #adbac7;
  text-transform: capitalize;
`

export const UserEmail = styled.span`
  font-size: 19px;
  color: #768390;
`

export const UserAbout = styled.span`
  font-size: 18px;
  color: #adbac7;
`

export const UserEditButton = styled.button`
  cursor: pointer;
  user-select: none;

  position: relative;

  padding: 6px 16px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #adbac7;
  white-space: nowrap;
  vertical-align: middle;

  background-color: #373e47;
  border: 1px solid;
  border-color: rgba(205, 217, 229, 0.1);
  border-radius: 6px;
  box-shadow: 0 0 transparent, 0 0 transparent;

  appearance: none;
`
