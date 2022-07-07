import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { contactsData, E_ContactsData } from './data'
import * as S from './styles'

import { userAPI } from 'src/services/user'
import * as C from 'src/styles/components'
import { I_Response } from 'src/typings/interfaces/response'
import { I_User } from 'src/typings/interfaces/user'

interface I_UserSectionProps {
  userData: I_Response<I_User>
}

type FormData = {
  alias: string
  about: string
  instagram: E_ContactsData.instagram
  linkedin: E_ContactsData.linkedin
  telegram: E_ContactsData.telegram
  other: E_ContactsData.other
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
      alias: userData.payload?.alias,
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
    userUpdate({ alias: getValues('alias'), about: getValues('about') })
  }

  useEffect(() => {
    if (userUpdateSuccess) handleEditModeClose()
  }, [userUpdateSuccess])

  console.log(userData.payload)

  if (userData.payload) {
    return (
      <>
        {editMode ? (
          <S.UserSection>
            {userData.payload.photo === null ? (
              <S.NoUserAvatar />
            ) : (
              <S.UserAvatar src={userData.payload.photo} alt='user-photo' />
            )}
            <S.Form autoComplete='off' onSubmit={handleSubmit(handleEditModeSave)}>
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
              <C.Divider />
              <S.ContactInputBox>
                {contactsData.map((item, index) => {
                  return (
                    <S.ContactInputBoxInner key={index}>
                      <S.ContactLabel htmlFor={`user_profile_link-${item.label}`}>
                        {item.icon}
                      </S.ContactLabel>
                      <S.ContactNameInput
                        id={`user_profile_link-${item.label}`}
                        type='text'
                        autoComplete='off'
                        autoCorrect='off'
                        spellCheck='false'
                        {...register(item.label)}
                      />
                      {errors.alias && (
                        <S.InputErrorText>Please enter a valid {item.label}</S.InputErrorText>
                      )}
                    </S.ContactInputBoxInner>
                  )
                })}
              </S.ContactInputBox>
              <S.UserEditButtons>
                <S.UserSaveButton>Save</S.UserSaveButton>
                <S.UserCancelButton onClick={handleEditModeClose}>Cancel</S.UserCancelButton>
              </S.UserEditButtons>
            </S.Form>
          </S.UserSection>
        ) : (
          <S.UserSection>
            {userData.payload.photo === null ? (
              <S.NoUserAvatar />
            ) : (
              <S.UserAvatar src={userData.payload.photo} alt='user-photo' />
            )}
            <S.UserMainInfo>
              <S.UserName>{userData.payload.alias}</S.UserName>
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
