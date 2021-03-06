import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'src/hooks/useStoreDispatch'
import { useStoreSelector } from 'src/hooks/useStoreSelector'
import { WelcomeLayout } from 'src/layouts'
import { Error } from 'src/pages'

import { signIn } from 'src/store/auth'
import { LocalStorage } from 'src/utils/helpers/localStorage'

export const ProtectedRoute = () => {
  const token = LocalStorage.getAuthToken()
  const isAuth = useStoreSelector((state) => state.auth.isAuth)
  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    if (token) dispatch(signIn())
  }, [])

  if (token && isAuth) return <Outlet />

  return (
    <WelcomeLayout>
      <Error />
    </WelcomeLayout>
  )
}
