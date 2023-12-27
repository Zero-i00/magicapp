import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IOrderState } from '../../types/order.interface'
import { IProduct } from '../../types/product.interface'


const initialState: IOrderState = {
	orderProduct: null
}

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		toggleProduct: (state, action: PayloadAction<IProduct>) => {
			const isExist = state.orderProduct?.id === action.payload.id

			if (isExist) state.orderProduct = null
			else state.orderProduct = action.payload

			return state
		},
		clearOrder: (state) => {
			state.orderProduct = null
			return state
		}
	}
})

export const orderReducer = orderSlice.reducer
export const orderActions = orderSlice.actions
