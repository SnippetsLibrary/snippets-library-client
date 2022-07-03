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

import { userAPI } from 'src/services'
import { authAPI } from 'src/services/auth'

const persistConfig = {
  key: 'snippets',
  storage,
}

const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([userAPI.middleware, authAPI.middleware]),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch
