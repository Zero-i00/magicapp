import { IRoute } from './navigation.types'
import Catalog from '../components/screens/catalog/Catalog'
import Order from '../components/screens/order/Order'

export const routes: IRoute[] = [
	{
		name: 'Catalog',
		component: Catalog
	},
	{
		name: 'Order',
		component: Order
	}
]
