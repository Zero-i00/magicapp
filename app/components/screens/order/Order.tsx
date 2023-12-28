import React, { useEffect, useState } from 'react'
import { ScrollView, Text, useWindowDimensions, View, Alert } from 'react-native'
import Layout from '../../layout/Layout'
import { useCreateOrderMutation } from '../../../store/api/order.api'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import CardContainer from '../../ui/containers/CardContainer'
import { Image } from 'expo-image'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import { useRootNavigation } from '../../../hooks/useRootNavigation'
import OrderItem from './order-item/OrderItem'
import { IOrderQuery } from '../../../types/order.interface'
import { useGetUsersQuery } from '../../../store/api/user.api'
import { IBaseListResponse } from '../../../types/base.interface'
import { IUser } from '../../../types/user.interface'
import DataLoader from '../../layout/data-loader/DataLoader'
import ChooseUser from './choose-user/ChooseUser'
import Field from '../../ui/field/Field'
import { useActions } from '../../../hooks/useActions'

const Order = () => {

	const {width, height} = useWindowDimensions()
	const {clearOrder} = useActions()
	const navigation = useRootNavigation()
	const { data = {results: [] as IUser[]} as IBaseListResponse<IUser>, ...options } = useGetUsersQuery(null)
	const [createOrder, {isLoading}] = useCreateOrderMutation()
	const {orderProduct} = useTypedSelector(state => state.order)
	const [errorMessage, setErrorMessage] = useState('')

	const [client, setClient] = useState<IUser>()
	const [seller, setSeller] = useState<IUser>()

	const {control, handleSubmit, setValue, reset} = useForm<IOrderQuery>({
		mode: 'onChange',
		defaultValues: {
			product: orderProduct?.id,
			client: data.results[0]?.id,
			seller: data.results[0]?.id
		},
	})

	const onSubmit: SubmitHandler<IOrderQuery> = query => {
		createOrder(query)
			.unwrap()
			.then(() => {
				Alert.alert('Успех', 'Товар успешно отправлен через портал', [
					{
						text: 'В каталог',
						onPress: () => navigation.navigate('Catalog')
					}
				])
				clearOrder()
				reset()
			})
			.catch((error) => {
				console.log(error.data.message)
				if (error?.data?.message?.includes('Bad product quantity')) {
					return setErrorMessage('На складе закончился товар')
				}
				if (error.status === 400) {
					return setErrorMessage('Заолните все поля')
				}
			})
	}

	useEffect(() => {
		setClient(data.results[0])
		setSeller(data.results[0])
	}, [data.results.length > 0])

	const handleClientChoose = (user: IUser) => {
		setValue('client', user.id)
		setClient(user)
	}

	const handleSellerChoose = (user: IUser) => {
		setValue('seller', user.id)
		setSeller(user)
	}

	return (
		<Layout title={`Магический портал`}>
			<DataLoader {...options}>
				<View style={{flex: 1}} className={`bg-yellow rounded-t-2xl`}>
					<ScrollView>
						<View className={`px-2`} style={{flex: 1}}>
							{orderProduct ? (
								<View>
									<OrderItem product={orderProduct} />

									<ChooseUser
										className={`my-4`}
										title={`Выберите клиента`}
										active={client}
										onItemPress={handleClientChoose}
										users={data.results}/>

									<ChooseUser
										className={`my-4`}
										active={seller}
										title={`Выберите продавца`}
										onItemPress={handleSellerChoose}
										users={data.results}/>

									<Controller
										control={control}
										name='amount'
										rules={{
											required: 'Заполните поле',
										}}
										render={({ field: field, fieldState: state }) => (
											<Field
												placeholder={'Количество товара'}
												keyboardType={`numeric`}
												field={field}
												state={state}
											/>
										)}
									/>

									{errorMessage && (
										<Text className={`text-danger text-sm font-medium my-2`}>
											{errorMessage}
										</Text>
									)}

									<PrimaryButton
										isLoading={isLoading}
										onPress={handleSubmit(onSubmit)}>
										Отправить товар
									</PrimaryButton>
								</View>
							) : (
								<View className={`relative flex items-center`} style={{flex: 1}}>
									<View className={`absolute z-10 flex flex-col items-center`}>
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
									</View>
									<Image
										className={`rounded-t-2xl`}
										style={{flex: 1, width: width, height: height}}
										source={require('../../../../assets/img/order_bg.jpg')}
										contentFit={`cover`}
									/>
								</View>
							)}
						</View>
					</ScrollView>
				</View>
			</DataLoader>
		</Layout>
	)
}

export default Order
