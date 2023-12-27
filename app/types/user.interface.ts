import { IBase } from './base.interface'
import { IGroup } from './group.interface'


export interface IUser extends IBase {
	username: string
	first_name: string
	last_name: string
	groups: IGroup[]
	token: string
}

export interface IUserQuery extends Pick<IUser, 'username'> {
	password: string
}

export interface IUserResponse {
	auth_token: string
}

export interface IUserState {
	user: IUser | null
}
