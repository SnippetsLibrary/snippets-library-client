import EditIcon from '@mui/icons-material/Edit'
import { ChangeEvent, useRef } from 'react'

import * as S from './styles'

import { userAPI } from 'src/services/user'
import { I_Response } from 'src/typings/interfaces/response'
import { I_User } from 'src/typings/interfaces/user'

interface I_ProfilePhotoProps {
  userData: I_Response<I_User>
}

export const ProfilePhoto = ({ userData }: I_ProfilePhotoProps) => {
  const inputFile = useRef<any>(null)

  const [updatePhoto] = userAPI.useUpdatePhotoMutation()

  const handleUpdatePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget) updatePhoto({ body: e.currentTarget.files![0], format: 'png' })
    e.currentTarget.value = ''
  }

  if (userData.payload)
    return (
      <>
        <S.ProfilePhoto
          onClick={() => {
            inputFile.current.click()
          }}
        >
          <S.Label>Profile picture</S.Label>
          {userData.payload.photo === null ? (
            <S.NoUserAvatar />
          ) : (
            <S.UserAvatar src={userData.payload.photo} alt='user-photo' />
          )}
          <S.PhotoEditButton>
            <EditIcon sx={{ width: '0.9rem', height: '0.9rem' }} />
            Edit
          </S.PhotoEditButton>
        </S.ProfilePhoto>
        <input type='file' ref={inputFile} hidden onChange={handleUpdatePhoto} />
      </>
    )

  return null
}
