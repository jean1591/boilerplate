import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/utils/interfaces/users'
import { createSlice } from '@reduxjs/toolkit'

export interface UserSlice {
  user: User | null
}

const initialState: UserSlice = { user: null }

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
