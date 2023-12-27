import { IProduct } from '../../../../types/product.interface'
import { ViewProps } from 'react-native'

export interface IProductItem extends ViewProps {
	product: IProduct
}
