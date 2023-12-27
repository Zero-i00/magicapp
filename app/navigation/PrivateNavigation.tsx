import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'


import { routes } from './routes'
import { TypeRootStackParamList } from './navigation.types'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Auth from '../components/screens/auth/Auth'


const Stack = createNativeStackNavigator<TypeRootStackParamList>()


const PrivateNavigation = () => {

	const { user } = useTypedSelector(state => state.auth)


	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#FFFFFF'
				}
			}}>
			{user ? routes.map(route => (
				<Stack.Screen key={route.name} {...route}/>
			)) : <>
				<Stack.Screen name={'Auth'} component={Auth}/>
			</>}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
