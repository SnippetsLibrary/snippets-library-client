import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import AuthSlice from './auth'
import UserSlice from './user'

import { authAPI } from 'src/services/auth'
import { postAPI } from 'src/services/post'
import { userAPI } from 'src/services/user'

const persistConfig = {
  key: 'snippets',
  storage,
  whitelist: [UserSlice.name],
}

const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [AuthSlice.name]: AuthSlice.reducer,
  [UserSlice.name]: UserSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([userAPI.middleware, authAPI.middleware, postAPI.middleware]),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch
