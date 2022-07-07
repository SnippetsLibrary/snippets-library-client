import styled from 'styled-components'

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  width: 100%;
  max-width: 296px;
  margin-top: -32px;
`
export const UserAvatar = styled.img`
  flex-shrink: 0;

  width: 100%;
  height: 296px;

  background-color: #222;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(205, 217, 229, 0.3);
`

export const NoUserAvatar = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: 296px;

  background-color: #222;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(205, 217, 229, 0.3);
`

export const UserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserName = styled.span`
  font-size: 28px;
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

  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, box-shadow, border-color;

  appearance: none;

  &:hover {
    background-color: #444c56;
    border-color: #768390;

    transition-duration: 0.1s;
  }
`

export const UserEditButtons = styled.div`
  display: flex;
  gap: 6px;
`

export const UserSaveButton = styled.button`
  cursor: pointer;
  user-select: none;

  position: relative;

  padding: 6px 16px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  white-space: nowrap;
  vertical-align: middle;

  background-color: #347d39;
  border: 1px solid;
  border-color: rgba(205, 217, 229, 0.1);
  border-radius: 6px;
  box-shadow: 0 0 transparent, 0 0 transparent;

  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, box-shadow, border-color;

  appearance: none;

  &:hover {
    background-color: #46954a;
    border-color: #768390;

    transition-duration: 0.1s;
  }
`

export const UserCancelButton = styled.button`
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

  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, box-shadow, border-color;

  appearance: none;

  &:hover {
    background-color: #444c56;
    border-color: #768390;

    transition-duration: 0.1s;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 100%;
`

export const Label = styled.label`
  font-size: 14px;
  line-height: 1.5;
  color: #adbac7;
`

export const ContactInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
`

export const ContactInputBoxInner = styled.div`
  display: flex;
  gap: 6px;

  width: 100%;
`

export const ContactLabel = styled.label`
  min-width: 32px;

  font-size: 14px;
  line-height: 1.5;
  color: #adbac7;
`

export const NameInput = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 5px 12px;

  font-family: GTWalsheimPro, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #adbac7;
  vertical-align: middle;

  background-color: #111;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #444c56;
  border-radius: 6px;
  box-shadow: 0 0 transparent;

  transition: box-shadow 0.2s ease 0s, color 0.2s ease 0s;

  &::placeholder {
    opacity: 0.35;
  }
`

export const ContactNameInput = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 2px 12px;

  font-family: GTWalsheimPro, sans-serif;
  font-size: 12px;
  line-height: 20px;
  color: #adbac7;
  vertical-align: middle;

  background-color: #111;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #444c56;
  border-radius: 6px;
  box-shadow: 0 0 transparent;

  transition: box-shadow 0.2s ease 0s, color 0.2s ease 0s;

  &::placeholder {
    opacity: 0.35;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding: 5px 12px;

  font-family: GTWalsheimPro, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #adbac7;
  vertical-align: middle;

  background-color: #111;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #444c56;
  border-radius: 6px;
  box-shadow: 0 0 transparent;
`

export const InputErrorText = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #adbac7;
  vertical-align: middle;
`
