import { authActions } from './slices/auth.slice'
import { orderActions } from './slices/order.slice'


export const rootActions = {
	...authActions,
	...orderActions
}
