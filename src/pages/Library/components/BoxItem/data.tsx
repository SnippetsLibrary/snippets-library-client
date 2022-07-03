import { ROUTES } from 'src/utils/constants/routes'

export enum E_BoxItemsTypes {
  odd = 'Odd',
  even = 'Even',
}

interface I_BoxItems {
  type: E_BoxItemsTypes
  title: string
  label: string
  lastTitle: string | null
  description: string
  linkLabel: string
  leadsTo: ROUTES
}

export const boxItems: I_BoxItems[] = [
  {
    type: E_BoxItemsTypes.odd,
    title: 'Snippets',
    label: 'Library',
    lastTitle: null,
    description:
      'Here will be some description of this project, just let him wait a bit. Extend your prototypes with code using Code Snippets.',
    linkLabel: 'Check out the documentation',
    leadsTo: ROUTES.docs,
  },
  {
    type: E_BoxItemsTypes.even,
    title: 'Create.',
    label: 'Explore.',
    lastTitle: 'Use.',
    description:
      'Explore the latest features. See why Snippets Library is the best snippet service.',
    linkLabel: 'Get started',
    leadsTo: ROUTES.docs,
  },
]
