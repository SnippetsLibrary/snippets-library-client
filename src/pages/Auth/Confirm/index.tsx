import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useStoreDispatch } from 'src/hooks/useStoreDispatch'
import { authAPI } from 'src/services/auth'
import { userAPI } from 'src/services/user'
import { setUserId, setUserName } from 'src/store/user'
import { LocalStorage } from 'src/utils/helpers/localStorage'
import { toasts } from 'src/utils/helpers/toasts'

export const Confirm = () => {
  const dispatch = useStoreDispatch()
  const params = useParams()
  const navigate = useNavigate()

  const { data: userConfirmData, isSuccess: userConfirmSuccess } =
    authAPI.useUserRegisterConfirmQuery(params.confirmId!)

  const [getUser, { data: userData }] = userAPI.useLazyGetUserQuery()

  useEffect(() => {
    if (userConfirmData && userConfirmData.payload && userConfirmSuccess) {
      LocalStorage.setAuthToken(userConfirmData.payload.token)
      getUser(userConfirmData.payload.user.id)
      navigate('/user')
      toasts.userConfirmSuccess()
    }
  }, [userConfirmData, userConfirmSuccess])

  useEffect(() => {
    if (userData && userData.payload) {
      console.log(userData)
      dispatch(setUserId(userData.payload._id))
      dispatch(setUserName(userData.payload.alias))
    }
  }, [userData])

  return null
}
