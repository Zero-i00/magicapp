import { api } from './api'
import { IBaseResponse } from '../../types/base.interface'
import { IOrderQuery } from '../../types/order.interface'


export const orderAPI = api.injectEndpoints({
	endpoints: build => ({
		createOrder: build.mutation<IBaseResponse, IOrderQuery>({
			query: order => ({
				body: order,
				url: 'orders/order/',
				method: 'POST'
			})
		}),
	})
})

export const { useCreateOrderMutation } = orderAPI
