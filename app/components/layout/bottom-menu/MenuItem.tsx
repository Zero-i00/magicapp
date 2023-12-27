import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'
import { IMenuItem, TypeNav } from './menu.interface'
import { Entypo } from '@expo/vector-icons';


interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable
			className={`relative w-[20%] items-center`}
			onPress={() => nav(item.path)}>
			<Entypo size={24} name={item.icon} color={isActive ? "#C87559" : "#58585C"}/>
			<Text
				className={`text-[12px] font-normal ${
					isActive ? 'text-primary' : 'text-gray'}`}>
				{item.title}
			</Text>
		</Pressable>
	)
}

export default MenuItem
