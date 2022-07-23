import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthRoute } from './AuthRoute'
import { ProtectedRoute } from './ProtectedRoute'
import { UnprotectedRoute } from './UnprotectedRoute'

import { AuthLayout, IntroduceLayout, MainLayout, WelcomeLayout } from 'src/layouts'
import {
  Community,
  Confirm,
  Docs,
  Error,
  Home,
  Library,
  Post,
  Profile,
  ProfileSettings,
  SignIn,
  SignUp,
  Welcome,
} from 'src/pages'
import { ROUTES } from 'src/utils/constants/routes'

export const Routing = () => {
  return (
    <Routes>
      <Route element={<UnprotectedRoute />}>
        {/* WelcomeLayout */}

        <Route
          path={ROUTES.home}
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

        {/* IntroduceLayout */}

        <Route
          path={ROUTES.library}
          element={
            <IntroduceLayout>
              <Library />
            </IntroduceLayout>
          }
        />
        <Route
          path={ROUTES.docs}
          element={
            <IntroduceLayout>
              <Docs />
            </IntroduceLayout>
          }
        />
      </Route>

      <Route element={<ProtectedRoute />}>
        {/* MainLayout */}

        <Route
          path={ROUTES.userHome}
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.error}
          element={
            <MainLayout>
              <Error />
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
        <Route
          path={ROUTES.post}
          element={
            <MainLayout>
              <Post />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.userProfile}
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
        <Route
          path={ROUTES.userProfileSettings}
          element={
            <MainLayout>
              <ProfileSettings />
            </MainLayout>
          }
        />
      </Route>

      <Route element={<AuthRoute />}>
        {/* AuthLayout  */}

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
        <Route path={ROUTES.authConfirm} element={<Confirm />} />
      </Route>
    </Routes>
  )
}
