import { IBase } from './base.interface'
import { ICategory } from './category.interface'


export interface IProduct extends IBase {
	title: string
	required_magic_power: number
	quantity: number
	image: string
	price: string
	description: string | null
	categories: ICategory[]
}

export interface IPotionsProductResponse {
	products: IProduct[]
}
