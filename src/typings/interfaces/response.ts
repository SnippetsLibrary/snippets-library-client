import { I_Pagination } from './app'

export interface I_Response<T = void> extends I_Pagination {
  message: string
  type: string
  payload?: T
}
