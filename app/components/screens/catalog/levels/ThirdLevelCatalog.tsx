import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'expo-image'

const ThirdLevelCatalog = () => {

	return (
			<View style={{flex: 1}} className={`relative`}>
				<Image
					className={`rounded-t-2xl`}
					style={{flex: 1, width: undefined, height: undefined}}
					source={require('../../../../../assets/gif/field.gif')}
					contentFit={`cover`}
				/>
				<View className={`absolute bg-white top-[10%] left-[10%] rounded-2xl px-4 py-6`}>
					<Text className={`text-black text-base font-medium text-center`}>
						Окно заколдовано древней магией
					</Text>
				</View>
			</View>
	)
}

export default ThirdLevelCatalog
