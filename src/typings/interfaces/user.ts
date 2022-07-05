import { I_Pagination } from './app'

export interface I_User {
  _id: string
  name: string
  email: string
  about?: string
  password?: string
  posts?: Array<string>
  totalPosts?: number
  __v?: number
}

export interface I_Users extends I_Pagination {
  docs: I_User[]
}
