import { createApi } from '@reduxjs/toolkit/dist/query'

import { I_UserLoginPayload, I_UserLoginResponse, I_UserRegisterPayload } from './interfaces'

import { baseQuery } from '../utils'

import { I_Response } from 'src/typings/interfaces/response'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery,
  endpoints: (build) => ({
    userLogin: build.mutation<I_Response<I_UserLoginResponse>, I_UserLoginPayload>({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    userRegister: build.mutation<I_Response, I_UserRegisterPayload>({
      query: (body) => ({
        url: '/users/register',
        method: 'POST',
        body,
      }),
    }),
  }),
})
