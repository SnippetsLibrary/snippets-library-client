export interface I_UserConfirm {
  token: string
  expires: string
}

export interface I_UserLoginResponse {
  token: string
  expires: string
  user: string
}

export interface I_UserLoginRequest {
  login: string
  password: string
}

export interface I_UserRegisterRequest {
  name: string
  email: string
  password: string
}
