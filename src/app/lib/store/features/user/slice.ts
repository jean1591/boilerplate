import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface UserSlice {
  username: string
}

const initialState: UserSlice = { username: '' }

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
  },
})

export const { setUsername } = userSlice.actions

export default userSlice.reducer
