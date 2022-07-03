import { Navigate, Route, Routes } from 'react-router-dom'

import { RouteAuth } from './RouteAuth'
import { RouteWrapper } from './RouteWrapper'

import { useStoreSelector } from 'src/hooks/useStoreSelector'
import { AuthLayout, IntroduceLayout, MainLayout, WelcomeLayout } from 'src/layouts'
import { Community, Docs, Error, Home, Library, Search, SignIn, SignUp, Welcome } from 'src/pages'
import { ROUTES } from 'src/utils/constants/routes'
import { LocalStorage } from 'src/utils/helpers/localStorage'

export const Routing = () => {
  const token = LocalStorage.getAuthToken()
  const isAuth = useStoreSelector((state) => state.user.isAuth)

  const authorized = token && isAuth

  return (
    <Routes>
      <Route element={<RouteWrapper />}>
        <Route
          path={ROUTES.home}
          element={
            authorized ? (
              <MainLayout>
                <Home />
              </MainLayout>
            ) : (
              <WelcomeLayout>
                <Welcome />
              </WelcomeLayout>
            )
          }
        />
        <Route
          path={ROUTES.error}
          element={
            authorized ? (
              <MainLayout>
                <Error />
              </MainLayout>
            ) : (
              <WelcomeLayout>
                <Error />
              </WelcomeLayout>
            )
          }
        />
        <Route
          path={ROUTES.library}
          element={
            authorized ? (
              <MainLayout>
                <Error />
              </MainLayout>
            ) : (
              <IntroduceLayout>
                <Library />
              </IntroduceLayout>
            )
          }
        />
        <Route
          path={ROUTES.docs}
          element={
            authorized ? (
              <MainLayout>
                <Error />
              </MainLayout>
            ) : (
              <IntroduceLayout>
                <Docs />
              </IntroduceLayout>
            )
          }
        />
        <Route
          path={ROUTES.search}
          element={
            authorized ? (
              <MainLayout>
                <Search />
              </MainLayout>
            ) : (
              <WelcomeLayout>
                <Error />
              </WelcomeLayout>
            )
          }
        />
        <Route
          path={ROUTES.community}
          element={
            authorized ? (
              <MainLayout>
                <Community />
              </MainLayout>
            ) : (
              <WelcomeLayout>
                <Error />
              </WelcomeLayout>
            )
          }
        />
      </Route>

      <Route element={<RouteAuth />}>
        <Route
          path={ROUTES.auth}
          element={
            <AuthLayout>
              <Navigate to={ROUTES.signIn} />
            </AuthLayout>
          }
        />
        <Route
          path={ROUTES.authError}
          element={
            <AuthLayout>
              <Navigate to={ROUTES.signIn} />
            </AuthLayout>
          }
        />
        <Route
          path={ROUTES.signIn}
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path={ROUTES.signUp}
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
      </Route>
    </Routes>
  )
}
