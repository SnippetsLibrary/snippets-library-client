import { createSlice } from '@reduxjs/toolkit'

import { LocalStorage } from 'src/utils/helpers/localStorage'

interface I_State {
  isAuth: boolean
}

const initialState: I_State = {
  isAuth: false,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
      state.isAuth = true
    },
    signOut: (state) => {
      state.isAuth = false
      LocalStorage.deleteAuthToken()
    },
  },
})

export const { signIn, signOut } = AuthSlice.actions

export default AuthSlice
