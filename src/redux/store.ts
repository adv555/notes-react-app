import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

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

import notesReducer from 'redux/notes/notes.reducer'

const middleware = (
  getDefaultMiddleware: (arg0: {
    serializableCheck: {
      ignoredActions: (
        | 'persist/FLUSH'
        | 'persist/REHYDRATE'
        | 'persist/PAUSE'
        | 'persist/PERSIST'
        | 'persist/PURGE'
        | 'persist/REGISTER'
      )[]
    }
  }) => any,
) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]

const notesPersistConfig = {
  key: 'notes',
  storage,
  blacklist: ['filter'],
}

const store = configureStore({
  reducer: {
    notes: persistReducer(notesPersistConfig, notesReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
})

const persistor = persistStore(store)

export { store, persistor }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
