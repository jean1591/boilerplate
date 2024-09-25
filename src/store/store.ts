import { configureStore } from '@reduxjs/toolkit'
import interactionsReducer from './features/interactions/slice'

export const store = configureStore({
  reducer: {
    interactions: interactionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
