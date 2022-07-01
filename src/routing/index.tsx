import { Route, Routes } from 'react-router-dom'

import { MainLayout, WelcomeLayout } from 'src/layouts'
import { Community, Docs, Error, Library, Welcome } from 'src/pages'
import { ROUTES } from 'src/utils/constants/routes'

export const Routing = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.welcome}
        element={
          <WelcomeLayout>
            <Welcome />
          </WelcomeLayout>
        }
      />
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
      <Route
        path={ROUTES.error}
        element={
          <WelcomeLayout>
            <Error />
          </WelcomeLayout>
        }
      />
    </Routes>
  )
}
