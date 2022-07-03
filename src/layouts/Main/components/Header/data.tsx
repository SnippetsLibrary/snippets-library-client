import { ROUTES } from 'src/utils/constants/routes'

enum E_HeaderLinks {
  search = 'Search',
  community = 'Community',
}

interface I_HeaderLink {
  label: E_HeaderLinks
  leadsTo: ROUTES
}

export const headerLinks: I_HeaderLink[] = [
  { label: E_HeaderLinks.search, leadsTo: ROUTES.search },
  { label: E_HeaderLinks.community, leadsTo: ROUTES.community },
]
