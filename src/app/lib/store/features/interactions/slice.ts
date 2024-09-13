import { createSlice } from '@reduxjs/toolkit'

export interface InteractionsSlice {}

const initialState: InteractionsSlice = {}

export const interactionsSlice = createSlice({
  name: 'interactionsSlice',
  initialState,
  reducers: {},
})

export const {} = interactionsSlice.actions

export default interactionsSlice.reducer
