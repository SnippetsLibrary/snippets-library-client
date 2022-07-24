import styled from 'styled-components'

export const ProfilePhoto = styled.div`
  cursor: pointer;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const UserAvatar = styled.img`
  flex-shrink: 0;

  width: 200px;
  height: 200px;

  background-color: #222;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(205, 217, 229, 0.3);
`

export const NoUserAvatar = styled.div`
  flex-shrink: 0;

  width: 200px;
  height: 200px;

  background-color: #222;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(205, 217, 229, 0.3);
`

export const Label = styled.label`
  font-size: 14px;
  line-height: 1.5;
  color: #adbac7;
`

export const PhotoEditButton = styled.button`
  cursor: inherit;

  position: absolute;
  bottom: 24px;

  display: flex;
  gap: 3px;
  align-items: center;

  padding: 6px 9px;

  font-size: 14px;
  font-weight: 500;
  color: #adbac7;

  background-color: #222828;
  border: 0;
  border-radius: 9px;
  outline: 1px solid #8888;
`
