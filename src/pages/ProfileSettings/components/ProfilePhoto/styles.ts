import styled from 'styled-components'

export const ProfilePhoto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const UserAvatar = styled.img`
  flex-shrink: 0;

  width: 100%;
  height: 200px;

  background-color: #222;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(205, 217, 229, 0.3);
`

export const NoUserAvatar = styled.div`
  flex-shrink: 0;

  width: 100%;
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
