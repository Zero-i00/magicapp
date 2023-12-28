import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { IChooseUser } from './choose-user.interface'
import cn from 'classnames'
import Button from '../../../ui/buttons/Button'

const ChooseUser: FC<IChooseUser> = ({title, active, onItemPress, users, className, ...rest}) => {
	return (
		<>
			<Text className={`text-black text-sm font-normal ml-1`}>
				{title}
			</Text>
			<View
				{...rest}
				style={{flexDirection: 'row', flexWrap: 'wrap'}}
				className={cn(`my-2`, className)}>
				{users.map(user => (
					<Button
						key={`grid-user-${user.id}`}
						onPress={() => onItemPress(user)}
						className={`py-2 px-4 rounded-lg border-[1px] ${active?.id === user.id ? "border-primary" : "border-gray/20"} mx-1`}>
						<Text className={active?.id === user.id ? "border-primary" : "border-gray/20"}>
							{user.username}
						</Text>
					</Button>
				))}
			</View>
		</>
	)
}

export default ChooseUser
