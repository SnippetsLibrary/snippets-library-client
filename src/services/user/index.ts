import { createApi } from '@reduxjs/toolkit/query/react'

import { I_UserUpdate } from './interfaces'

import { baseQuery } from '../utils'

import { I_Response } from 'src/typings/interfaces/response'
import { I_User, I_Users } from 'src/typings/interfaces/user'

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery,
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<I_Response<I_Users>, void>({
      query: () => ({
        url: '/users',
      }),
      providesTags: ['Users'],
    }),
    getUser: build.query<I_Response<I_User>, string | null>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: ['Users'],
    }),
    updateUser: build.mutation<I_Response<I_User>, I_UserUpdate>({
      query: (body) => ({
        url: '/users/update',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})
