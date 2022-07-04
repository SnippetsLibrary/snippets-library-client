import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { authAPI } from 'src/services/auth'
import { LocalStorage } from 'src/utils/helpers/localStorage'
import { toasts } from 'src/utils/helpers/toasts'

export const Confirm = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { data: userConfirmData, isSuccess: userConfirmSuccess } =
    authAPI.useUserRegisterConfirmQuery(params.confirmId!)

  useEffect(() => {
    if (userConfirmData && userConfirmData.payload && userConfirmSuccess) {
      LocalStorage.setAuthToken(userConfirmData.payload.token)
      navigate('/user')
      toasts.userConfirmSuccess()
    }
  }, [userConfirmData, userConfirmSuccess])

  return null
}
