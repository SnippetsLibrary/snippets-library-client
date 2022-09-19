import styled from 'styled-components'

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
  max-width: 525px;
`

export const Label = styled.label`
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

export const UserButtonsInner = styled.div`
  padding-top: 32px;
`

export const UserUpdateButton = styled.button`
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
