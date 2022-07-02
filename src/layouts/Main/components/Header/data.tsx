import { ROUTES } from 'src/utils/constants/routes'

enum E_HeaderLinks {
  library = 'Library',
  docs = 'Docs',
  community = 'Community',
}

interface I_HeaderLink {
  label: E_HeaderLinks
  leadsTo: ROUTES
}

export const headerLinks: I_HeaderLink[] = [
  { label: E_HeaderLinks.library, leadsTo: ROUTES.library },
  { label: E_HeaderLinks.docs, leadsTo: ROUTES.docs },
  { label: E_HeaderLinks.community, leadsTo: ROUTES.community },
]

enum E_MenuLinks {
  signIn = 'Sign In',
  signUp = 'Sign Up',
}

interface I_MenuLink {
  label: E_MenuLinks
  leadsTo: ROUTES
}

export const menuLinks: I_MenuLink[] = [
  { label: E_MenuLinks.signIn, leadsTo: ROUTES.auth },
  { label: E_MenuLinks.signUp, leadsTo: ROUTES.auth },
]
