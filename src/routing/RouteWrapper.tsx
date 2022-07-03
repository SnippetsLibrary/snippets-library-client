import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'src/hooks/useStoreDispatch'
import { signIn } from 'src/store/user'
import { LocalStorage } from 'src/utils/helpers/localStorage'

export const RouteWrapper = () => {
  const token = LocalStorage.getAuthToken()
  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    if (token) dispatch(signIn())
  }, [])

  return <Outlet />
}
