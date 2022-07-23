import { createApi } from '@reduxjs/toolkit/query/react'

import { I_PostVote } from './interfaces'

import { baseQuery } from '../utils'

import { I_Post, I_PostData } from 'src/typings/interfaces/post'
import { I_Response } from 'src/typings/interfaces/response'

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPosts: build.query<I_Response<I_PostData>, string>({
      query: (regexp) => ({
        url: `/posts?regexp=${regexp}`,
      }),
      providesTags: ['Posts'],
    }),
    getPost: build.query<I_Response<I_Post>, string | string[]>({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
      providesTags: ['Posts'],
    }),
    getPostVote: build.mutation<I_Response<I_PostVote>, { id: string; poll: string }>({
      query: ({ id, poll }) => ({
        url: `/posts/${id}/vote?positive=${poll}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})
