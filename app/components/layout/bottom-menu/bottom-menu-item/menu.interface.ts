import { TypeRootStackParamList } from '../../../../navigation/navigation.types'
import { Entypo } from '@expo/vector-icons';

export interface IMenuItem {
	icon: keyof typeof Entypo.glyphMap
	path: keyof TypeRootStackParamList
	title: string
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void
