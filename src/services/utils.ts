import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

import { LocalStorage } from 'src/utils/helpers/localStorage'

export const baseQuery = fetchBaseQuery({
  baseUrl: `http://213.217.8.92:4000`,
  prepareHeaders: (headers) => {
    const accessToken = LocalStorage.getAuthToken()
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
})
