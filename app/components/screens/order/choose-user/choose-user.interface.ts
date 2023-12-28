import { ViewProps } from 'react-native'
import { IUser } from '../../../../types/user.interface'


export interface IChooseUser extends ViewProps {
	users: IUser[]
	title: string
	active: IUser | undefined
	onItemPress: (user: IUser) => void
}
