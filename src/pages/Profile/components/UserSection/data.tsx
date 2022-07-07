import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import WebAssetIcon from '@mui/icons-material/WebAsset'
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
  { label: E_ContactsData.other, icon: <WebAssetIcon /> },
]
