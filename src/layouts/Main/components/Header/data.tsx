import { ROUTES } from 'src/utils/constants/routes'

export enum E_HeaderLinks {
  community = 'Community',
}

interface I_HeaderLink {
  label: E_HeaderLinks
  leadsTo: ROUTES
}

export const headerLinks: I_HeaderLink[] = [
  { label: E_HeaderLinks.community, leadsTo: ROUTES.community },
]

export enum E_MenuLinks {
  profile = 'Profile',
  settings = 'Settings',
}

interface I_MenuLinks {
  label: E_MenuLinks
  leadsTo: E_MenuLinks
}

export const menuLinks: I_MenuLinks[] = [
  { label: E_MenuLinks.profile, leadsTo: E_MenuLinks.profile },
  { label: E_MenuLinks.settings, leadsTo: E_MenuLinks.settings },
]
