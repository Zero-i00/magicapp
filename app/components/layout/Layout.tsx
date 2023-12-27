import React, { FC, PropsWithChildren } from 'react'
import { ILayout } from './layout.interface'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Platform, SafeAreaView, Text, View } from 'react-native'
import cn from 'classnames'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import Button from '../ui/buttons/Button'

const Layout: FC<PropsWithChildren<ILayout>> = ({children, title, className, ...rest }) => {

	const {top} = useSafeAreaInsets()
	const {logout} = useActions()
	const {user} = useTypedSelector(state => state.auth)

	return (
		<>
			<SafeAreaView
				{...rest}
				className={cn(`bg-gray/5`, className)}
				style={{
					paddingTop: Platform.OS === 'ios' ? top / 5 : top * 1.1
				}
			}>
				{title && (
					<View className={`w-full px-4 py-2 bg-white shadow-2xl rounded-b-xl flex flex-row justify-between items-center`}>
						<Text className={`text-black text-xl font-semibold`}>
							{title}
						</Text>
						{user && (
							<Button onPress={() => logout}>
								<Text className={`text-primary text-base font-medium`}>
									Выйти
								</Text>
							</Button>
						)}
					</View>
				)}
			</SafeAreaView>
			<View style={{flex: 1}}>
				{children}
			</View>
		</>
	)
}

export default Layout
