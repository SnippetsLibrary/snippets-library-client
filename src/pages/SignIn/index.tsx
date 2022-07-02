import { useForm } from 'react-hook-form'

import * as S from './styles'

import * as A from 'src/styles/auth'
import { ROUTES } from 'src/utils/constants/routes'

type FormData = {
  login: string
  password: string
}

export const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>()

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
          {...register('login', { required: true })}
        />
        <A.Input
          type='password'
          placeholder='Password'
          autoComplete='off'
          {...register('password', { required: true, minLength: 6 })}
        />
        <A.Button type='submit' onClick={handleSubmit((data) => console.log(data))}>
          Sign In
        </A.Button>
      </A.Form>
    </S.SignIn>
  )
}
