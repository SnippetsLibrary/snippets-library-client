import { LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'

import { ContentSection } from './components/ContentSection'
import { UserSection } from './components/UserSection'
import * as S from './styles'

import { Error } from '../404'

import { useStoreSelector } from 'src/hooks/useStoreSelector'
import { userAPI } from 'src/services/user'

export const Profile = () => {
  const params = useParams()
  const userId = useStoreSelector((state) => state.user.userId)
  const userName = useStoreSelector((state) => state.user.userName)

  const {
    data: userData,
    isSuccess: userDataSuccess,
    isLoading: userDataLoading,
  } = userAPI.useGetUserQuery(userId)

  if (userDataLoading) return <LinearProgress />

  if (userName === params.userName && userData && userData.payload && userDataSuccess) {
    return (
      <S.Profile>
        <S.Inner>
          <UserSection userData={userData} />
          <ContentSection />
        </S.Inner>
      </S.Profile>
    )
  }

  return <Error />
}
