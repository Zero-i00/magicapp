import React from 'react'
import { View } from 'react-native'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import Layout from '../../layout/Layout'
import { useRootNavigation } from '../../../hooks/useRootNavigation'
import FirstLevelCatalog from './levels/FirstLevelCatalog'
import ThirdLevelCatalog from './levels/ThirdLevelCatalog'
import SecondLevelCatalog from './levels/SecondLevelCatalog'

const Catalog = () => {

	const navigation = useRootNavigation()
	const {user} = useTypedSelector(state => state.auth)

	if (!user) return navigation.navigate('Auth')

	const groups = user.groups.map(group => group.name.toLowerCase())

	return (
		<Layout title={`Магическая лавка`}>
			<View className={`flex-1 bg-yellow rounded-t-2xl`}>
					{
						groups.includes('mage third level')
						? <ThirdLevelCatalog />
						: groups.includes('mage second level')
						? <SecondLevelCatalog />
						: <FirstLevelCatalog />
					}
			</View>
		</Layout>
	)
}

export default Catalog
