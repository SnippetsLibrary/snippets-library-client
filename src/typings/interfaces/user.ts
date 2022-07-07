import { I_Pagination } from './app'

export type T_UserContacts = {
  phone?: string
  linkedin?: string
  telegram?: string
  instagram?: string
  site?: string
  other?: string
}

export interface I_User {
  _id: string
  alias: string
  name?: string
  status?: string
  about?: string
  email: string
  photo?: string
  contacts?: T_UserContacts
  totalPosts?: number
  totalSaves?: number
}

export interface I_Users extends I_Pagination {
  docs: I_User[]
}
