/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'

interface I_State {
  userId: string | null
  userName: string | null
}

const initialState: I_State = {
  userName: null,
  userId: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: any) => {
      state.userName = action.payload
    },
    setUserId: (state, action: any) => {
      state.userId = action.payload
    },
  },
})

export const { setUserId, setUserName } = userSlice.actions

export default userSlice
