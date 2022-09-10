import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

import { LocalStorage } from 'src/utils/helpers/localStorage'

export const baseQuery = fetchBaseQuery({
  baseUrl: `https://srenik.pp.ua/api`,
  // baseUrl: `http://localhost:4000/api`,
  prepareHeaders: (headers) => {
    const accessToken = LocalStorage.getAuthToken()
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
})
