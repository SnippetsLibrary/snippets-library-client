import { useLayoutEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'src/hooks/useStoreDispatch'
import { useStoreSelector } from 'src/hooks/useStoreSelector'
import { MainLayout } from 'src/layouts'
import { Error } from 'src/pages'
import { signIn } from 'src/store/user'
import { ROUTES } from 'src/utils/constants/routes'

import { LocalStorage } from 'src/utils/helpers/localStorage'

export const UnprotectedRoute = () => {
  const token = LocalStorage.getAuthToken()
  const isAuth = useStoreSelector((state) => state.user.isAuth)
  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    if (token) dispatch(signIn())
  }, [])

  if (!token && !isAuth) return <Outlet />

  if (token && location.pathname === ROUTES.home) return <Navigate to={ROUTES.userHome} />

  return (
    <MainLayout>
      <Error />
    </MainLayout>
  )
}
