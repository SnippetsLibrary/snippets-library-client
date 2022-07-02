import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

export const SignUp = () => {
  return (
    <S.SignUp>
      <S.UpperLabelBox>
        <S.MainLabel>Create Account</S.MainLabel>
        <S.Redirect>
          Already have an account?
          <S.RedirectLink to={ROUTES.signIn}>Sign in</S.RedirectLink>
        </S.Redirect>
      </S.UpperLabelBox>
    </S.SignUp>
  )
}
