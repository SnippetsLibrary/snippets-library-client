import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import * as A from '../styles'

import { authAPI } from 'src/services/auth'
import { ROUTES } from 'src/utils/constants/routes'
import { LocalStorage } from 'src/utils/helpers/localStorage'

type FormData = {
  login: string
  password: string
}

export const SignIn = () => {
  const navigate = useNavigate()

  const [
    userLogin,
    { data: userLoginData, isSuccess: userLoginSuccess, isLoading: userLoginLoading },
  ] = authAPI.useUserLoginMutation()

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<FormData>()

  const handleLogin = () => {
    userLogin({ login: getValues('login'), password: getValues('password') })
  }

  useEffect(() => {
    if (userLoginData && userLoginData.payload && userLoginSuccess) {
      LocalStorage.setAuthToken(userLoginData.payload.token)
      navigate('/user', { replace: true })
    }
  }, [userLoginData, userLoginSuccess])

  return (
    <S.SignIn>
      <A.UpperLabelBox>
        <A.MainLabel>Welcome to Snippets</A.MainLabel>
        <A.Redirect>
          Don't have an account?
          <A.RedirectLink to={ROUTES.signUp}>Sign up for free</A.RedirectLink>
        </A.Redirect>
      </A.UpperLabelBox>
      <A.Form autoComplete='off' onSubmit={handleSubmit(handleLogin)}>
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
            {...register('password', { required: true, minLength: 3 })}
          />
          {errors.password && <A.InputErrorText>Please enter a valid password</A.InputErrorText>}
        </A.InputBox>
        <S.LoginButton
          disabled={userLoginLoading}
          userLoginLoading={userLoginLoading}
          type='submit'
        >
          Sign In
        </S.LoginButton>
      </A.Form>
    </S.SignIn>
  )
}
