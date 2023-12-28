import { IBase } from './base.interface'
import { IUser } from './user.interface'
import { IProduct } from './product.interface'


export interface IOrder extends IBase {
	amount: number
	datetime: string
	client: IUser
	seller: IUser
	product: IProduct
}

export interface IOrderQuery {
	client: number
	seller: number
	product: number
	amount: number
}

export interface IOrderState {
	orderProduct: IProduct | null
}
