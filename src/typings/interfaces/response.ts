export interface I_Response<T = void> {
  message: string
  type: string
  payload?: T
}
