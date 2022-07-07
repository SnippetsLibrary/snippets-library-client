import AddLinkIcon from '@mui/icons-material/AddLink'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import { ReactNode } from 'react'

export enum E_ContactsData {
  instagram = 'instagram',
  linkedin = 'linkedin',
  telegram = 'telegram',
  other = 'other',
}

interface I_ContactsData {
  label: E_ContactsData
  icon: ReactNode
}

export const contactsData: I_ContactsData[] = [
  { label: E_ContactsData.instagram, icon: <InstagramIcon /> },
  { label: E_ContactsData.linkedin, icon: <LinkedInIcon /> },
  { label: E_ContactsData.telegram, icon: <TelegramIcon /> },
  { label: E_ContactsData.other, icon: <AddLinkIcon /> },
]
