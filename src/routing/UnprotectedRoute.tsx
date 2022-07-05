import { useLayoutEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useStoreDispatch } from 'src/hooks/useStoreDispatch'
import { useStoreSelector } from 'src/hooks/useStoreSelector'
import { MainLayout } from 'src/layouts'
import { Error } from 'src/pages'
import { signIn } from 'src/store/auth'
import { ROUTES } from 'src/utils/constants/routes'

import { LocalStorage } from 'src/utils/helpers/localStorage'

export const UnprotectedRoute = () => {
  const location = useLocation()
  const token = LocalStorage.getAuthToken()
  const isAuth = useStoreSelector((state) => state.auth.isAuth)
  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    if (token) dispatch(signIn())
  }, [])

  if (!token && !isAuth) return <Outlet />

  if (token && isAuth && location.pathname === ROUTES.home) return <Navigate to={ROUTES.userHome} />

  return (
    <MainLayout>
      <Error />
    </MainLayout>
  )
}
