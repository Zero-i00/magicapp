import React, { FC } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { IProductItem } from './product-item.interface'
import cn from 'classnames'
import { Image } from 'expo-image'
import { magicLevelConverter } from '../../../../utils/converters/magicLevelConverter'
import { SERVER_URL } from '../../../../constants/base.constants'
import PrimaryButton from '../../../ui/buttons/PrimaryButton'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

const ProductItem: FC<IProductItem> = ({product, className, ...rest}) => {

	const {width, height} = useWindowDimensions()
	const {toggleProduct} = useActions()
	const {orderProduct} = useTypedSelector(state => state.order)

	const isExist = orderProduct?.id === product.id

	return (
		<View
			{...rest}
			style={{width: width / 2.2, height: height / 2.05}}
			className={cn(`flex-col rounded-lg justify-between items-center bg-green/40 mx-1 my-2`, className)}>
			<View style={{height: width / 2.2}}>
				<Image
					className={`rounded-lg`}
					style={{width: width / 2.2, height: width / 2.2}}
					source={{uri: product.image.includes(SERVER_URL) ? product.image : `${SERVER_URL}/${product.image}`}}
					contentFit={`cover`}
				/>
			</View>
			<View className={`flex flex-col justify-start items-start`}>
				<Text className={`h-[25px] text-black text-base font-semibold`}>
					{product.title}
				</Text>
				<Text className={`mt-2 h-[35px]`}>
					{product.description ? `${product.description.slice(0, 25)}...` : 'Нет описания'}
				</Text>
				<Text className={`font-bold h-[20px]`}>
					{magicLevelConverter(product.required_magic_power)}
				</Text>
				<Text className={`text-black text-lg font-semibold my-2`}>
					{product.price}{' '}
					<Text className={`text-gray text-base font-normal`}>
						Монет
					</Text>
				</Text>
				<PrimaryButton
					onPress={() => toggleProduct(product)}
					style={{width: width / 2.4}}
					className={`my-2`}>
					{isExist ? "Убрать" : "Отправить"}
				</PrimaryButton>
			</View>
		</View>
	)
}

export default ProductItem
