import { LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'

import { PasswordForm } from './components/PasswordForm'
import { ProfileForm } from './components/ProfileForm'
import { ProfilePhoto } from './components/ProfilePhoto'
import * as S from './styles'

import { userAPI } from 'src/services/user'
import * as C from 'src/styles/components'

export const ProfileSettings = () => {
  const params = useParams()

  const {
    data: userData,
    isSuccess: userDataSuccess,
    isLoading: userDataLoading,
  } = userAPI.useGetUserQuery(params.userName!)

  if (userDataLoading)
    return (
      <S.ProfileSettings>
        <LinearProgress />
      </S.ProfileSettings>
    )

  if (userData && userDataSuccess)
    return (
      <S.ProfileSettings>
        <S.Inner>
          <S.InnerBox>
            <S.Label>User Settings</S.Label>
            <C.Divider />
            <S.SettingsInner>
              <S.SettingsBox>
                <ProfileForm userData={userData} />
              </S.SettingsBox>
              <S.SettingsBox>
                <ProfilePhoto userData={userData} />
              </S.SettingsBox>
            </S.SettingsInner>
          </S.InnerBox>
        </S.Inner>
        <S.Inner>
          <S.InnerBox>
            <S.Label>Security Settings</S.Label>
            <C.Divider />
            <S.SettingsInner>
              <S.SettingsBox>
                <PasswordForm />
              </S.SettingsBox>
            </S.SettingsInner>
          </S.InnerBox>
        </S.Inner>
      </S.ProfileSettings>
    )

  return (
    <S.ProfileSettings>
      <LinearProgress />
    </S.ProfileSettings>
  )
}
