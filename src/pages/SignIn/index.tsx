import * as S from './styles'

import * as A from 'src/styles/auth'
import { ROUTES } from 'src/utils/constants/routes'

export const SignIn = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
  }

  return (
    <S.SignIn>
      <A.UpperLabelBox>
        <A.MainLabel>Welcome to Snippets</A.MainLabel>
        <A.Redirect>
          Don't have an account?
          <A.RedirectLink to={ROUTES.signUp}>Sign up for free</A.RedirectLink>
        </A.Redirect>
      </A.UpperLabelBox>
      <A.Form autoComplete='off'>
        <A.Input
          type='text'
          placeholder='Username or Email'
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
        />
        <A.Input type='password' placeholder='Password' autoComplete='new-password' />
        <A.Button onClick={handleSubmit} type='submit'>
          Sign In
        </A.Button>
      </A.Form>
    </S.SignIn>
  )
}
