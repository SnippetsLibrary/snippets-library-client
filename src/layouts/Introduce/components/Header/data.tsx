import { ROUTES } from 'src/utils/constants/routes'

enum E_HeaderLinks {
  library = 'Library',
  docs = 'Docs',
}

interface I_HeaderLink {
  label: E_HeaderLinks
  leadsTo: ROUTES
}

export const headerLinks: I_HeaderLink[] = [
  { label: E_HeaderLinks.library, leadsTo: ROUTES.library },
  { label: E_HeaderLinks.docs, leadsTo: ROUTES.docs },
]

enum E_MenuLinks {
  more = 'More',
  signIn = 'Sign In',
}

interface I_MenuLink {
  label: E_MenuLinks
  leadsTo: ROUTES
}

export const menuLinks: I_MenuLink[] = [
  { label: E_MenuLinks.more, leadsTo: ROUTES.docs },
  { label: E_MenuLinks.signIn, leadsTo: ROUTES.auth },
]
