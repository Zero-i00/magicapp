import { api } from './api'
import { IBaseListResponse } from '../../types/base.interface'
import { IUser } from '../../types/user.interface'


export const userAPI = api.injectEndpoints({
	endpoints: build => ({
		getUsers: build.query<IBaseListResponse<IUser>, null>({
			query: () => ({
				url: 'users/user',
				method: 'GET'
			})
		}),
	})
})

export const { useGetUsersQuery } = userAPI
