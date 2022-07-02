import * as S from './styles'

import { ROUTES } from 'src/utils/constants/routes'

export const SignIn = () => {
  return (
    <S.SignIn>
      <S.UpperLabelBox>
        <S.MainLabel>Welcome to Snippets</S.MainLabel>
        <S.Redirect>
          Don{`'`}t have an account?
          <S.RedirectLink to={ROUTES.signUp}>Sign up for free</S.RedirectLink>
        </S.Redirect>
      </S.UpperLabelBox>
    </S.SignIn>
  )
}
