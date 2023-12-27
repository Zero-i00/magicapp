import React, { FC, PropsWithChildren } from 'react'
import { Text, useWindowDimensions, View } from "react-native";
import { IDataLoader } from './data-loader.interface'
import Loader from '../../ui/loader/Loader'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import ErrorContainer from '../../ui/containers/ErrorContainer'

const DataLoader: FC<PropsWithChildren<IDataLoader>> = ({
	children,
	isLoading,
	isFetching,
	error,
	refetch
}) => {

	const {height} = useWindowDimensions()

	return (
		isLoading || isFetching ? (
			<View style={{flex: 1, height: height / 1.5}} className={`bg-transparent w-full flex justify-center items-center`}>
				<Loader />
			</View>
		) : error ? (
			<View style={{flex: 1}} className={`bg-transparent w-full flex justify-center items-center px-4`}>
				<ErrorContainer>
					<Text className={`text-black text-base font-medium`}>
						Упс, кажется что-то пошло не так, попробуйте обновить страницу!
					</Text>
				</ErrorContainer>
				<PrimaryButton className={`w-2/3 my-2`} onPress={() => refetch} isLoading={isLoading}>
					Обновить
				</PrimaryButton>
			</View>
		) : (
			<View style={{flex: 1}}>{children}</View>
		)
	)
}

export default DataLoader
