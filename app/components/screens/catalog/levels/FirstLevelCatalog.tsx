import React from 'react'
import { ScrollView, Text, useWindowDimensions, View } from 'react-native'
import { useGetPotionsQuery } from '../../../../store/api/product.api'
import { IPotionsProductResponse } from '../../../../types/product.interface'
import DataLoader from '../../../layout/data-loader/DataLoader'
import CardContainer from '../../../ui/containers/CardContainer'
import ProductItem from '../product-item/ProductItem'
import { Image } from 'expo-image'

const FirstLevelCatalog = () => {

	const {width} = useWindowDimensions()
	const {data = {products: []} as IPotionsProductResponse, ...options} = useGetPotionsQuery(null)

	return (
		<DataLoader {...options}>
			<ScrollView showsVerticalScrollIndicator={false} className={`px-1`}>
				<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
					{data.products.length > 0 ? data.products.map(product => (
						<ProductItem key={`product-item-${product.id}`} product={product}/>
					)) : (
						<View style={{flex: 1}}>
							<CardContainer className={`my-12`}>
								<Text className={`text-black text-base font-medium text-center`}>
									Кажется, у нас в ассортименте закончились зелья
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

export default FirstLevelCatalog
