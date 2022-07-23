export enum E_PostHeaderButtonsData {
  copyUrl = 'copyUrl',
  copyTelegram = 'copyTelegram',
}

interface I_PostHeaderButtonsData {
  label: string
  onClick: E_PostHeaderButtonsData
}

export const postHeaderButtonsData: I_PostHeaderButtonsData[] = [
  { label: 'Copy URL', onClick: E_PostHeaderButtonsData.copyUrl },
  { label: 'Telegram', onClick: E_PostHeaderButtonsData.copyTelegram },
]
