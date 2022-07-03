import { createApi } from '@reduxjs/toolkit/query/react'

import {
  I_UserConfirm,
  I_UserLoginRequest,
  I_UserLoginResponse,
  I_UserRegisterRequest,
} from './interfaces'

import { baseQuery } from '../utils'

import { I_Response } from 'src/typings/interfaces/response'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery,
  endpoints: (build) => ({
    userLogin: build.mutation<I_Response<I_UserLoginResponse>, I_UserLoginRequest>({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    userRegister: build.mutation<I_Response, I_UserRegisterRequest>({
      query: (body) => ({
        url: '/users/register',
        method: 'POST',
        body,
      }),
    }),
    userRegisterConfirm: build.query<I_Response<I_UserConfirm>, string>({
      query: (hash) => ({
        url: `/users/confirm/${hash}`,
      }),
    }),
  }),
})
