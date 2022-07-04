import { useForm } from 'react-hook-form'

import * as S from './styles'

import * as A from '../styles'

import { ROUTES } from 'src/utils/constants/routes'
import { regExp } from 'src/utils/helpers/regExp'

type FormData = {
  name: string
  email: string
  password: string
}

export const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>()

  return (
    <S.SignUp>
      <A.UpperLabelBox>
        <A.MainLabel>Create Account</A.MainLabel>
        <A.Redirect>
          Already have an account?
          <A.RedirectLink to={ROUTES.signIn}>Sign in</A.RedirectLink>
        </A.Redirect>
      </A.UpperLabelBox>
      <A.Form autoComplete='off' onSubmit={handleSubmit((data) => console.log(data))}>
        <A.InputBox>
          <A.NameInput
            type='text'
            placeholder='Username'
            autoComplete='off'
            autoCorrect='off'
            spellCheck='false'
            nameError={Boolean(errors.name)}
            {...register('name', { required: true })}
          />
          {errors.name && <A.InputErrorText>Please enter a valid name</A.InputErrorText>}
        </A.InputBox>
        <A.InputBox>
          <A.EmailInput
            type='text'
            placeholder='Email'
            autoComplete='off'
            emailError={Boolean(errors.email)}
            {...register('email', {
              required: true,
              pattern: {
                value: regExp.email,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <A.InputErrorText>Please enter a valid email</A.InputErrorText>}
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
        <S.RegisterButton type='submit'>Sign In</S.RegisterButton>
      </A.Form>
    </S.SignUp>
  )
}
