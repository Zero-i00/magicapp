import React, { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TypeNav } from './bottom-menu-item/menu.interface'
import { menuData } from './menu.data'
import MenuItem from './bottom-menu-item/MenuItem'


interface IBottomMenu {
	nav: TypeNav
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = props => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			style={{ paddingBottom: bottom + 10 }}
			className={`p-2 flex-row justify-center items-center shadow-lg w-full bg-white rounded-t-xl`}>
			{menuData.map(item => (
				<MenuItem item={item} key={item.path} {...props} />
			))}
		</View>
	)
}

export default BottomMenu
