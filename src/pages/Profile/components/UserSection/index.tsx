import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './styles'

import { userAPI } from 'src/services/user'
import { I_Response } from 'src/typings/interfaces/response'
import { I_User } from 'src/typings/interfaces/user'

interface I_UserSectionProps {
  userData: I_Response<I_User>
}

type FormData = {
  name: string
  about: string
}

export const UserSection = ({ userData }: I_UserSectionProps) => {
  const [editMode, setEditMode] = useState<boolean>(false)

  const [userUpdate, { isSuccess: userUpdateSuccess }] = userAPI.useUpdateUserMutation()

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      name: userData.payload?.name,
      about: userData.payload?.about,
    },
  })

  const handleEditModeActive = () => {
    setEditMode(true)
  }

  const handleEditModeClose = () => {
    setEditMode(false)
  }

  const handleEditModeSave = () => {
    userUpdate({ name: getValues('name'), about: getValues('about') })
  }

  useEffect(() => {
    if (userUpdateSuccess) handleEditModeClose()
  }, [userUpdateSuccess])

  if (userData.payload) {
    return (
      <>
        {editMode ? (
          <S.UserSection>
            <S.UserAvatar src={userData.payload.photo} alt='user-photo' />
            <S.Form autoComplete='off' onSubmit={handleSubmit(handleEditModeSave)}>
              <S.InputBox>
                <S.Label htmlFor='user_profile_name'>Username</S.Label>
                <S.NameInput
                  id='user_profile_name'
                  type='text'
                  autoComplete='off'
                  autoCorrect='off'
                  spellCheck='false'
                  {...register('name', { required: true })}
                />
                {errors.name && <S.InputErrorText>Please enter a valid user</S.InputErrorText>}
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
              <S.UserEditButtons>
                <S.UserSaveButton>Save</S.UserSaveButton>
                <S.UserCancelButton onClick={handleEditModeClose}>Cancel</S.UserCancelButton>
              </S.UserEditButtons>
            </S.Form>
          </S.UserSection>
        ) : (
          <S.UserSection>
            <S.UserAvatar src={userData.payload.photo} alt='user-photo' />
            <S.UserMainInfo>
              <S.UserName>{userData.payload.name}</S.UserName>
              <S.UserEmail>{userData.payload.email}</S.UserEmail>
            </S.UserMainInfo>
            <S.UserAbout>{userData.payload.about}</S.UserAbout>
            <S.UserEditButton onClick={handleEditModeActive}>Edit profile</S.UserEditButton>
          </S.UserSection>
        )}
      </>
    )
  }

  return null
}
