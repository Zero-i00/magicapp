import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TextInput, useWindowDimensions, View } from 'react-native'
import { IProduct } from '../../../../types/product.interface'
import { useGetProductsQuery } from '../../../../store/api/product.api'
import { IBaseListResponse } from '../../../../types/base.interface'
import DataLoader from '../../../layout/data-loader/DataLoader'
import ProductItem from '../product-item/ProductItem'
import CardContainer from '../../../ui/containers/CardContainer'
import { Image } from 'expo-image'

const SecondLevelCatalog = () => {

	const {width} = useWindowDimensions()
	const {data = {results: [] as IProduct[]} as IBaseListResponse<IProduct>, ...options} = useGetProductsQuery(null)

	const [sortedProducts, setSortedProducts] = useState(data.results)

	useEffect(() => {
		setSortedProducts(data.results)
	}, [data.results?.length > 0])

	const onSearchChange = (value: string) => {
		const sorted = data.results.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
		return setSortedProducts(sorted as [IProduct])
	}

	return (
		<DataLoader {...options}>
			<ScrollView showsVerticalScrollIndicator={false} className={`px-1`}>
				<TextInput
					autoCapitalize={'none'}
					placeholder={`Найти ...`}
					className={`w-[98%] mx-auto text-black text-sm font-medium px-4 py-2 my-4 border-2 border-gray/20 rounded-lg bg-white`}
					onChange={value => onSearchChange(value.nativeEvent.text)}
				/>
				<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
					{sortedProducts.length > 0 ? sortedProducts.map(product => (
						<ProductItem key={`product-item-${product.id}`} product={product}/>
					)) : (
						<View style={{flex: 1}}>
							<CardContainer className={`my-12`}>
								<Text className={`text-black text-base font-medium text-center`}>
									Кажется, у нас в ассортименте закончились товары
								</Text>
							</CardContainer>
							<Image
								style={{width: width / 1.1, height: width / 1.1}}
								source={require('../../../../../assets/img/logo.png')}
							/>
						</View>
					)}
				</View>
			</ScrollView>
		</DataLoader>
	)
}

export default SecondLevelCatalog
