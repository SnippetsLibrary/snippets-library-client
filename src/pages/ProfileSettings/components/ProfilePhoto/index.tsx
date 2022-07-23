import * as S from './styles'

import { I_Response } from 'src/typings/interfaces/response'
import { I_User } from 'src/typings/interfaces/user'

interface I_ProfilePhotoProps {
  userData: I_Response<I_User>
}

export const ProfilePhoto = ({ userData }: I_ProfilePhotoProps) => {
  console.log(userData)

  if (userData.payload)
    return (
      <S.ProfilePhoto>
        <S.Label>Profile picture</S.Label>
        {userData.payload.photo === null ? (
          <S.NoUserAvatar />
        ) : (
          <S.UserAvatar src={userData.payload.photo} alt='user-photo' />
        )}
      </S.ProfilePhoto>
    )

  return null
}
