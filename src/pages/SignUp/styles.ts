import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0px;
  padding: 0px;

  font: inherit;
  vertical-align: baseline;

  border: 0px;
`

export const UpperLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`

export const MainLabel = styled.h2``

export const Redirect = styled.span`
  display: flex;
  gap: 6px;
`

export const RedirectLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.auth.navLink};
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`
