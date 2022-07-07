import { LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'

import { ContentSection } from './components/ContentSection'
import { UserSection } from './components/UserSection'
import * as S from './styles'

import { Error } from '../404'

import { userAPI } from 'src/services/user'
import * as C from 'src/styles/components'

export const Profile = () => {
  const params = useParams()

  const {
    data: userData,
    isSuccess: userDataSuccess,
    isLoading: userDataLoading,
  } = userAPI.useGetUserQuery(params.userName!)

  if (userDataLoading)
    return (
      <S.Profile>
        <LinearProgress />
      </S.Profile>
    )

  if (userData && userData.payload && userDataSuccess) {
    return (
      <S.Profile>
        <S.Inner>
          <C.Divider />
          <S.InnerBox>
            <UserSection userData={userData} />
            <ContentSection />
          </S.InnerBox>
        </S.Inner>
      </S.Profile>
    )
  }

  return <Error />
}
