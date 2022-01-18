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
// import logger from 'redux-logger';

import notesReducer from 'redux/notes/notes.reducer'

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
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
