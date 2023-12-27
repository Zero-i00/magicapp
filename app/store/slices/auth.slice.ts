import { IUser, IUserState } from '../../types/user.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: IUserState = {
	user: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
			return state
		},
		logout: state => {
			state.user = null
			return state
		}
	}
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
