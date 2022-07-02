import * as S from './styles'

import * as A from 'src/styles/auth'
import { ROUTES } from 'src/utils/constants/routes'

export const SignIn = () => {
  return (
    <S.SignIn>
      <A.UpperLabelBox>
        <A.MainLabel>Welcome to Snippets</A.MainLabel>
        <A.Redirect>
          Don't have an account?
          <A.RedirectLink to={ROUTES.signUp}>Sign up for free</A.RedirectLink>
        </A.Redirect>
      </A.UpperLabelBox>
    </S.SignIn>
  )
}
