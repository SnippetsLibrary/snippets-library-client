import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthLayout, MainLayout, WelcomeLayout } from 'src/layouts'
import { Community, Docs, Error, Library, SignIn, SignUp, Welcome } from 'src/pages'
import { ROUTES } from 'src/utils/constants/routes'

export const Routing = () => {
  return (
    <Routes>
      {/* Welcome Layout */}
      <Route
        path={ROUTES.welcome}
        element={
          <WelcomeLayout>
            <Welcome />
          </WelcomeLayout>
        }
      />
      <Route
        path={ROUTES.error}
        element={
          <WelcomeLayout>
            <Error />
          </WelcomeLayout>
        }
      />
      {/* Main Layout */}
      <Route
        path={ROUTES.library}
        element={
          <MainLayout>
            <Library />
          </MainLayout>
        }
      />
      <Route
        path={ROUTES.docs}
        element={
          <MainLayout>
            <Docs />
          </MainLayout>
        }
      />
      <Route
        path={ROUTES.community}
        element={
          <MainLayout>
            <Community />
          </MainLayout>
        }
      />
      {/* Auth Layout */}

      <Route
        path={ROUTES.auth}
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
    </Routes>
  )
}
