import { ROUTES } from 'src/utils/constants/routes'

enum E_HeaderLinks {
  library = 'Library',
  docs = 'Docs',
  community = 'Community',
}

interface I_HeaderLinks {
  label: E_HeaderLinks
  leadsTo: ROUTES
}

export const headerLinks: I_HeaderLinks[] = [
  { label: E_HeaderLinks.library, leadsTo: ROUTES.library },
  { label: E_HeaderLinks.docs, leadsTo: ROUTES.docs },
  { label: E_HeaderLinks.community, leadsTo: ROUTES.community },
]
