import { api } from './api'
import { IUserQuery, IUserResponse } from '../../types/user.interface'


export const authAPI = api.injectEndpoints({
	endpoints: build => ({
		login: build.mutation<IUserResponse, IUserQuery>({
			query: user => ({
				body: user,
				url: 'auth',
				method: 'POST'
			})
		}),
	})
})

export const { useLoginMutation } = authAPI
