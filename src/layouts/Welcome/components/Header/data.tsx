import { ROUTES } from 'src/utils/constants/routes'

enum E_HeaderWelcomeLinks {
  learn = 'Learn',
  updates = 'Updates',
}

interface I_HeaderWelcomeLinks {
  label: E_HeaderWelcomeLinks
  leadsTo: ROUTES
}

export const headerWelcomeLinks: I_HeaderWelcomeLinks[] = [
  { label: E_HeaderWelcomeLinks.learn, leadsTo: ROUTES.library },
  { label: E_HeaderWelcomeLinks.updates, leadsTo: ROUTES.updates },
]
