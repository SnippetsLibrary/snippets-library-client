import { Outlet } from 'react-router-dom'

import { useStoreSelector } from 'src/hooks/useStoreSelector'
import { MainLayout } from 'src/layouts'
import { Error } from 'src/pages'

import { LocalStorage } from 'src/utils/helpers/localStorage'

export const UnprotectedRoute = () => {
  const token = LocalStorage.getAuthToken()
  const isAuth = useStoreSelector((state) => state.user.isAuth)

  if (!token && !isAuth) return <Outlet />

  return (
    <MainLayout>
      <Error />
    </MainLayout>
  )
}
