import React, { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { IMenuItem, TypeNav } from './menu.interface'
import { Entypo } from '@expo/vector-icons';
import { useTypedSelector } from '../../../../hooks/useTypedSelector'


interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path
	const {orderProduct} = useTypedSelector(state => state.order)

	return (
		<Pressable
			className={`relative w-[50%] items-center`}
			onPress={() => nav(item.path)}>
			<Entypo size={24} name={item.icon} color={isActive ? "#C87559" : "#58585C"}/>
			{orderProduct && item.path === "Order" &&  (
				<View
					className={`absolute -top-[10%] left-[52%] text-[9px] z-10 bg-primary rounded-full w-4 h-4 flex items-center text-center justify-center border-2 border-white`}>
					<View className={`w-1.5 h-1.5 rounded-full bg-white`} />
				</View>
			)}
			<Text
				className={`text-[12px] font-normal ${
					isActive ? 'text-primary' : 'text-gray'}`}>
				{item.title}
			</Text>
		</Pressable>
	)
}

export default MenuItem
