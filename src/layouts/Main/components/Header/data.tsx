export enum E_HeaderLinks {
  search = 'Search',
  community = 'Community',
  profile = 'Your Profile',
}

interface I_HeaderLink {
  label: E_HeaderLinks
  leadsTo: E_HeaderLinks
}

export const headerLinks: I_HeaderLink[] = [
  { label: E_HeaderLinks.search, leadsTo: E_HeaderLinks.search },
  { label: E_HeaderLinks.community, leadsTo: E_HeaderLinks.community },
  { label: E_HeaderLinks.profile, leadsTo: E_HeaderLinks.profile },
]
