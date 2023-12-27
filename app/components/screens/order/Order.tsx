import React from 'react'
import { ScrollView, Text, useWindowDimensions, View } from 'react-native'
import Layout from '../../layout/Layout'
import { useCreateOrderMutation } from '../../../store/api/order.api'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import CardContainer from '../../ui/containers/CardContainer'
import { Image } from 'expo-image'
import { useForm } from 'react-hook-form'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import { useRootNavigation } from '../../../hooks/useRootNavigation'
import OrderItem from './order-item/OrderItem'

const Order = () => {

	const {width} = useWindowDimensions()
	const navigation = useRootNavigation()
	const [createOrder, {isLoading}] = useCreateOrderMutation()
	const {orderProduct} = useTypedSelector(state => state.order)

	const {} = useForm({})

	return (
		<Layout title={`Магический портал`}>
			<View style={{flex: 1}} className={`bg-yellow rounded-t-2xl`}>
				<ScrollView className={`px-4`}>
					<View style={{flex: 1}}>
						{orderProduct ? (
							<OrderItem product={orderProduct} />
						) : (
							<View className={`flex items-center`} style={{flex: 1}}>
								<CardContainer className={`mt-12 w-full`}>
									<Text className={`text-black text-base font-medium text-center`}>
										Какой предмет отправимм ?
									</Text>
								</CardContainer>
								<PrimaryButton
									onPress={() => navigation.navigate('Catalog')}
									className={`my-4 w-2/3`}>
									К предметам
								</PrimaryButton>
								<Image
									style={{width: width / 1.1, height: width / 1.1}}
									source={{uri: "https://tenor.com/ru/view/portal-rick-and-morty-gif-23586904"}}
								/>
							</View>
						)}
					</View>
				</ScrollView>
			</View>
		</Layout>
	)
}

export default Order
