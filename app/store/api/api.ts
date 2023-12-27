import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'


const API_URL = 'http://192.168.31.220:8000/api/v1/'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Product'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers) => {
			headers.set('Authorization', `Token 1592ce4a9f096c1271a2919ce7830f39e6e3de28`)
			return headers
		}
	}),
	endpoints: build => ({
		base: build.query({
			query: () => '/'
		})
	})
})

