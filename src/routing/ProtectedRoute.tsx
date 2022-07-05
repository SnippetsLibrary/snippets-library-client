import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'src/hooks/useStoreDispatch'
import { useStoreSelector } from 'src/hooks/useStoreSelector'
import { WelcomeLayout } from 'src/layouts'
import { Error } from 'src/pages'

import { signIn } from 'src/store/user'
import { LocalStorage } from 'src/utils/helpers/localStorage'

export const ProtectedRoute = () => {
  const token = LocalStorage.getAuthToken()
  const isAuth = useStoreSelector((state) => state.user.isAuth)
  const dispatch = useStoreDispatch()

  console.log(isAuth)

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
