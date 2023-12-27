import { ViewProps } from 'react-native'
import { IProduct } from '../../../../types/product.interface'


export interface IOrderItem extends ViewProps {
	product: IProduct
}
