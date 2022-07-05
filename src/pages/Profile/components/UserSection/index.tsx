import { useState } from 'react'

import * as S from './styles'

import { I_Response } from 'src/typings/interfaces/response'
import { I_User } from 'src/typings/interfaces/user'

interface I_UserSectionProps {
  userData: I_Response<I_User>
}

export const UserSection = ({ userData }: I_UserSectionProps) => {
  const [editMode, setEditMode] = useState<boolean>(true)

  if (userData.payload) {
    return (
      <>
        {editMode ? (
          <S.UserSection>
            <S.UserAvatar />
            <S.UserMainInfo>
              <S.UserName>{userData.payload.name}</S.UserName>
              <S.UserEmail>{userData.payload.email}</S.UserEmail>
            </S.UserMainInfo>
            <S.UserAbout>{userData.payload.about}</S.UserAbout>
            <S.UserEditButton>Edit profile</S.UserEditButton>
          </S.UserSection>
        ) : null}
      </>
    )
  }

  return null
}
