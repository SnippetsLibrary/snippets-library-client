import styled from 'styled-components'

export const SignUp = styled.div`
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

export const RegisterButton = styled.button`
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
