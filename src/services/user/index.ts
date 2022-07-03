import { createApi } from '@reduxjs/toolkit/dist/query'

import { baseQuery } from '../utils'

import { I_Response } from 'src/typings/interfaces/response'
import { I_Users } from 'src/typings/interfaces/user'

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery,
  endpoints: (build) => ({
    getUsers: build.query<I_Response<I_Users>, void>({
      query: () => ({
        url: `/users`,
      }),
    }),
  }),
})
