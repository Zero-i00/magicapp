import { combineReducers } from '@reduxjs/toolkit'
import { api } from './api/api'
import { authReducer } from './slices/auth.slice'
import { orderReducer } from './slices/order.slice'


export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authReducer,
	order: orderReducer
})
