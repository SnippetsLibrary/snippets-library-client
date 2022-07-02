import * as S from './styles'

import * as A from 'src/styles/auth'
import { ROUTES } from 'src/utils/constants/routes'

export const SignUp = () => {
  return (
    <S.SignUp>
      <A.UpperLabelBox>
        <A.MainLabel>Create Account</A.MainLabel>
        <A.Redirect>
          Already have an account?
          <A.RedirectLink to={ROUTES.signIn}>Sign in</A.RedirectLink>
        </A.Redirect>
      </A.UpperLabelBox>
    </S.SignUp>
  )
}
