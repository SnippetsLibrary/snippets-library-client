import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './styles'

import { userAPI } from 'src/services/user'

type FormData = {
  password: string
  newPassword: string
}

export const PasswordForm = () => {
  const [passwordUpdate, { isSuccess: userUpdateSuccess }] = userAPI.useChangePasswordMutation()

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      password: '',
      newPassword: '',
    },
  })

  const handleUpdateProfile = () => {
    passwordUpdate({
      password: getValues('password'),
      newPassword: getValues('newPassword'),
    })
  }

  return (
    <S.Form autoComplete='off' onSubmit={handleSubmit(handleUpdateProfile)}>
      <S.InputBox>
        <S.Label htmlFor='user_profile_password'>Current Password</S.Label>
        <S.NameInput
          id='user_profile_password'
          type='text'
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
          {...register('password', { required: true })}
        />
      </S.InputBox>
      <S.InputBox>
        <S.Label htmlFor='user_profile_new_password'>New Password</S.Label>
        <S.NameInput
          id='user_profile_new_password'
          type='text'
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
          minLength={8}
          {...register('newPassword', { required: true })}
        />
        {errors.newPassword && <S.InputErrorText>Please enter a valid password</S.InputErrorText>}
      </S.InputBox>
      <S.UserButtonsInner>
        <S.UserUpdateButton type='submit'>Change Password</S.UserUpdateButton>
        {userUpdateSuccess && <b style={{ color: '#fff' }}>Password Successfully Changed</b>}
      </S.UserButtonsInner>
    </S.Form>
  )
}
