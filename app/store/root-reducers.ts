import { combineReducers } from '@reduxjs/toolkit'
import { api } from './api/api'
import { authReducer } from './slices/auth.slice'


export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authReducer
})
