export interface I_UserLoginResponse {
  token: string
  expires: string
  user: string
}

export interface I_UserLoginPayload {
  user: string
  email: string
  password: string
}

export interface I_AuthRegisterPayload {
  name: string
  email: string
  pass: string
}
