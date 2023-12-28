import React, { FC } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { IOrderItem } from './order-item.interface'
import { Image } from 'expo-image'
import CardContainer from '../../../ui/containers/CardContainer'
import Button from '../../../ui/buttons/Button'
import { useActions } from '../../../../hooks/useActions'
import { AntDesign } from '@expo/vector-icons';
import { magicLevelConverter } from '../../../../utils/converters/magicLevelConverter'

const OrderItem: FC<IOrderItem> = ({product, className, ...rest}) => {

	const {width} = useWindowDimensions()
	const {toggleProduct} = useActions()

	return (
		<CardContainer {...rest} className={`my-2`}>
			<View className={`max-h-[150px] flex flex-row justify-center items-center`}>
				<View className={`w-[130px] h-[130px] flex flex-col justify-center items-center rounded-lg`}>
					<Image
						className={`ml-3 rounded-md`}
						style={{flex: 1, width: 130, height: 130}}
						contentFit={`cover`}
						source={{uri: product.image}}
					/>
				</View>
				<View className={`w-2/3 flex items-end px-2`}>
					<View style={{ width: width / 2, height: '70%' }}>
						<View className={`flex flex-row justify-between w-full items-center`}>
							<Button className={`ml-auto`} onPress={() => toggleProduct(product)}>
								<AntDesign name="close" size={24} color="black" />
							</Button>
						</View>
						<View className={`flex flex-row justify-between items-center w-full`}>
							<Text className={`text-sm text-black font-bold`}>
								{magicLevelConverter((product.required_magic_power))}
							</Text>
						</View>
						<Text className={`text-black text-base font-semibold my-1`}>
							{product.title}
						</Text>
						<Text className={`text-black/80 text-sm font-medium my-1`}>
							{product.description ? `${product.description.slice(0, 25)}...` : 'Нет описания'}
						</Text>
					</View>
					<View style={{ width: width / 2, height: '35%' }} className={`flex flex-row justify-start items-center mt-3`}>
						<Text className={`text-2xl text-black font-bold py-4`}>
							{product.price}{' '}
							<Text className={`text-gray text-sm font-normal`}>
								Монет
							</Text>
						</Text>
					</View>
				</View>
			</View>
		</CardContainer>
	)
}

export default OrderItem
