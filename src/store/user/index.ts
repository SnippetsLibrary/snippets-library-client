import { createSlice } from '@reduxjs/toolkit'

interface I_State {
  isAuth: boolean
}

const initialState: I_State = {
  isAuth: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state) => {
      state.isAuth = true
    },
    signOut: (state) => {
      state.isAuth = false
    },
  },
})

export const { signIn, signOut } = userSlice.actions

export default userSlice
