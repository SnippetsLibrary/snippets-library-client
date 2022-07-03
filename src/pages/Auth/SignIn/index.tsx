import { useForm } from 'react-hook-form'

import * as S from './styles'

import * as A from '../styles'

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
      <A.Form autoComplete='off' onSubmit={handleSubmit((data) => console.log(data))}>
        <A.InputBox>
          <A.UserInput
            type='text'
            placeholder='Username or Email'
            autoComplete='off'
            autoCorrect='off'
            spellCheck='false'
            loginError={Boolean(errors.login)}
            {...register('login', { required: true })}
          />
          {errors.login && <A.InputErrorText>Please enter a valid user</A.InputErrorText>}
        </A.InputBox>
        <A.InputBox>
          <A.PassInput
            type='password'
            placeholder='Password'
            autoComplete='off'
            passError={Boolean(errors.password)}
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <A.InputErrorText>Please enter a valid password</A.InputErrorText>}
        </A.InputBox>
        <A.Button type='submit'>Sign In</A.Button>
      </A.Form>
    </S.SignIn>
  )
}
