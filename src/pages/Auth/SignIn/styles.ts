import styled from 'styled-components'

export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;

  margin: 0px;
  padding: 0px;

  font: inherit;
  vertical-align: baseline;

  border: 0px;
`

interface I_LoginButton {
  userLoginLoading: boolean
}

export const LoginButton = styled.button<I_LoginButton>`
  cursor: pointer;

  width: 100%;
  padding: 9px 16px;

  font-weight: 500;
  color: #fff;

  background-color: ${({ theme, userLoginLoading }) =>
    userLoginLoading ? '#999' : theme.colors.auth.navLink};
  filter: brightness(1);
  border: none;
  border-radius: 10px;
  outline: 0px;
`
