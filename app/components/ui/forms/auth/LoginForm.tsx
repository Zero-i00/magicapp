import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useActions } from '../../../../hooks/useActions'
import { useLoginMutation } from '../../../../store/api/auth.api'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IUserQuery } from '../../../../types/user.interface'
import Field from '../../field/Field'
import PrimaryButton from '../../buttons/PrimaryButton'

const LoginForm = () => {

	const {setUser} = useActions()
	const [login, {isLoading}] = useLoginMutation()
	const {control, handleSubmit, reset} = useForm<IUserQuery>({
		mode: 'onChange'
	})

	const [errorMessage, setErrorMessage] = useState('')

	const onSubmit: SubmitHandler<IUserQuery> = data => {
		login(data)
			.unwrap()
			.then((response) => {
				setUser({
					...response.user,
					token: response.token
				})
			}).catch(() => {
				setErrorMessage('Невозможно войти с предоставленными учетными данными')
		})
		return reset()
	}

	return (
		<View>
			<Controller
				control={control}
				name='username'
				rules={{
					required: 'Заполните поле',
				}}
				render={({ field: field, fieldState: state }) => (
					<Field
						placeholder={'Логин'}
						field={field}
						state={state}
					/>
				)}
			/>

			<Controller
				control={control}
				name='password'
				rules={{
					required: 'Заполните поле',
					minLength: {
						value: 6,
						message: 'Пароль должен содержать минимум 6 символов'
					}
				}}
				render={({ field: field, fieldState: state }) => (
					<Field
						textContentType={`password`}
						placeholder={'Пароль'}
						field={field}
						state={state}
						hint={`Длина пароля не менее 6 символов`}
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
				className={`my-4`}
				onPress={handleSubmit(onSubmit)}>
					Войти
			</PrimaryButton>
		</View>
	)
}

export default LoginForm
