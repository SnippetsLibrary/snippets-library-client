import { I_User } from 'src/typings/interfaces/user'

export interface I_UserLoginResponse {
  token: string
  expires: string
  user: I_User
}

export interface I_UserLoginRequest {
  login: string
  password: string
}

export interface I_UserRegisterRequest {
  alias: string
  email: string
  password: string
}

export interface I_UserConfirm {
  token: string
  expires: string
  user?: any
}
