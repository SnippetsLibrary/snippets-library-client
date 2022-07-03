import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const UpperLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`

export const MainLabel = styled.h2`
  opacity: 0.875;
`

export const Redirect = styled.span`
  display: flex;
  gap: 6px;

  font-size: 14px;
`

export const RedirectLink = styled(Link)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.auth.navLink};
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: center;

  width: 100%;

  input,
  button {
    font-family: GTWalsheimPro, sans-serif;
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 100%;
`

interface UserInputProps {
  loginError: boolean
}

export const UserInput = styled.input<UserInputProps>`
  width: 100%;
  padding: 9px 16px;

  font-size: 13px;
  font-weight: 500;

  background-color: #f3f3f3;
  border: none;
  border-radius: 10px;
  outline: 0px;

  transition: box-shadow 0.2s ease 0s, color 0.2s ease 0s;

  &::placeholder {
    opacity: 0.35;
  }

  &:focus {
    outline-width: 0px;
    box-shadow: inset 0 0 0 1px
      ${({ theme, loginError }) =>
        loginError ? theme.colors.auth.inputErrorText : theme.colors.auth.navLink};
  }
`

interface NameInputProps {
  nameError: boolean
}

export const NameInput = styled.input<NameInputProps>`
  width: 100%;
  padding: 9px 16px;

  font-size: 13px;
  font-weight: 500;

  background-color: #f3f3f3;
  border: none;
  border-radius: 10px;
  outline: 0px;

  transition: box-shadow 0.2s ease 0s, color 0.2s ease 0s;

  &::placeholder {
    opacity: 0.35;
  }

  &:focus {
    outline-width: 0px;
    box-shadow: inset 0 0 0 1px
      ${({ theme, nameError }) =>
        nameError ? theme.colors.auth.inputErrorText : theme.colors.auth.navLink};
  }
`

interface EmailInputProps {
  emailError: boolean
}

export const EmailInput = styled.input<EmailInputProps>`
  width: 100%;
  padding: 9px 16px;

  font-size: 13px;
  font-weight: 500;

  background-color: #f3f3f3;
  border: none;
  border-radius: 10px;
  outline: 0px;

  transition: box-shadow 0.2s ease 0s, color 0.2s ease 0s;

  &::placeholder {
    opacity: 0.35;
  }

  &:focus {
    outline-width: 0px;
    box-shadow: inset 0 0 0 1px
      ${({ theme, emailError }) =>
        emailError ? theme.colors.auth.inputErrorText : theme.colors.auth.navLink};
  }
`

interface PassInputProps {
  passError: boolean
}

export const PassInput = styled.input<PassInputProps>`
  width: 100%;
  padding: 9px 16px;

  font-size: 13px;
  font-weight: 500;

  background-color: #f3f3f3;
  border: none;
  border-radius: 10px;
  outline: 0px;

  transition: box-shadow 0.2s ease 0s, color 0.2s ease 0s;

  &::placeholder {
    opacity: 0.35;
  }

  &:focus {
    outline-width: 0px;
    box-shadow: inset 0 0 0 1px
      ${({ theme, passError }) =>
        passError ? theme.colors.auth.inputErrorText : theme.colors.auth.navLink};
  }
`

export const InputErrorText = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.auth.inputErrorText};
`

export const Button = styled.button`
  cursor: pointer;

  width: 100%;
  padding: 9px 16px;

  font-weight: 500;
  color: #fff;

  background-color: ${({ theme }) => theme.colors.auth.navLink};
  filter: brightness(1);
  border: none;
  border-radius: 10px;
  outline: 0px;
`
