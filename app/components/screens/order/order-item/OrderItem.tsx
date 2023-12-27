import React, { FC } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { IOrderItem } from './order-item.interface'
import cn from 'classnames'
import { Image } from 'expo-image'
import { SERVER_URL } from '../../../../constants/base.constants'

const OrderItem: FC<IOrderItem> = ({product, className, ...rest}) => {

	const {width} = useWindowDimensions()

	return (
		<View
			{...rest}
			className={cn(`flex flex-col bg-white rounded-xl my-2`, className)}>
			<View className={`flex flex-row  justify-start items-start`}>
				<Image
					className={`rounded-lg`}
					style={{width: width / 2.5, height: width / 2.2}}
					source={{uri: product.image.includes(SERVER_URL) ? product.image : `${SERVER_URL}/${product.image}`}}
					contentFit={`cover`}
				/>
				<View className={`mx-1`}>
					<Text className={`text-black text-base font-semibold`}>
						{product.title}
					</Text>
					<Text className={`mt-2`}>
						{product.description ? `${product.description.slice(0, 25)}...` : 'Нет описания'}
					</Text>
				</View>
			</View>
			<Text className={`text-black text-lg font-semibold my-2`}>
				{product.price}{' '}
				<Text className={`text-gray text-base font-normal`}>
					Монет
				</Text>
			</Text>
		</View>
	)
}

export default OrderItem
