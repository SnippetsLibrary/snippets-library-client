import { useState } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './styles'

import { userAPI } from 'src/services/user'
import { I_Response } from 'src/typings/interfaces/response'
import { I_User } from 'src/typings/interfaces/user'

interface I_ProfileFormProps {
  userData: I_Response<I_User>
}

type FormData = {
  alias: string
  about: string
}

export const ProfileForm = ({ userData }: I_ProfileFormProps) => {
  const [userUpdate, { isSuccess: userUpdateSuccess }] = userAPI.useUpdateUserMutation()

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      alias: userData.payload?.alias,
      about: userData.payload?.about,
    },
  })

  const handleUpdateProfile = () => {
    userUpdate({
      alias: getValues('alias'),
      about: getValues('about'),
    })
  }

  return (
    <S.Form autoComplete='off' onSubmit={handleSubmit(handleUpdateProfile)}>
      <S.InputBox>
        <S.Label htmlFor='user_profile_name'>Username</S.Label>
        <S.NameInput
          id='user_profile_name'
          type='text'
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
          {...register('alias', { required: true })}
        />
        {errors.alias && <S.InputErrorText>Please enter a valid username</S.InputErrorText>}
      </S.InputBox>
      <S.InputBox>
        <S.Label htmlFor='user_profile_bio'>Bio</S.Label>
        <S.TextArea
          id='user_profile_bio'
          data-input-max-length='160'
          rows={4}
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
          {...register('about')}
        />
      </S.InputBox>
      <S.UserButtonsInner>
        <S.UserUpdateButton type='submit'>Update Profile</S.UserUpdateButton>
      </S.UserButtonsInner>
    </S.Form>
  )
}
