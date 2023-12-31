import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import PrivateNavigation from './PrivateNavigation'
import { useTypedSelector } from '../hooks/useTypedSelector'
import BottomMenu from '../components/layout/bottom-menu/BottomMenu'


const Navigation = () => {

	const {user} = useTypedSelector(state => state.auth)

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)
		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		)

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])

	const max_level = user?.groups.find(group => group.name.toLowerCase() === 'mage third level')

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigation />
			</NavigationContainer>
			{user && !max_level &&  currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute}/>
			)}
		</>
	)
}

export default Navigation
