import { api } from './api'
import { IPotionsProductResponse, IProduct } from '../../types/product.interface'
import { IBaseListResponse } from '../../types/base.interface'


export const productAPI = api.injectEndpoints({
	endpoints: build => ({
		getPotions: build.query<IPotionsProductResponse, null>({
			query: () => ({
				url: 'products/potions',
				method: 'GET'
			})
		}),
		getProducts: build.query<IBaseListResponse<IProduct>, null>({
			query: () => ({
				url: 'products/product',
				method: 'GET'
			})
		})
	})
})

export const { useGetPotionsQuery, useGetProductsQuery } = productAPI
