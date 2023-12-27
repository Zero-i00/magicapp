import React from 'react'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Image } from 'expo-image'
import LoginForm from '../../ui/forms/auth/LoginForm'

const Auth = () => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View className={`flex-1 items-center justify-center px-6`}>
					<Image
						style={{width: 200, height: 200}}
						source={require('../../../../assets/img/logo.png')}
						contentFit={`contain`}
					/>
					<Text className={`text-black text-4xl font-bold text-center my-4`}>
						Авторизация
					</Text>

					<View className={`w-full`}>
						<LoginForm />
					</View>
				</View>
		</TouchableWithoutFeedback>
	)
}

export default Auth
