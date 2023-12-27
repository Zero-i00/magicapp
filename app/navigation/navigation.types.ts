import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Order: undefined
	Catalog: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
