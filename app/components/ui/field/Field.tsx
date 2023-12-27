import React, { FC, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

import { Entypo } from '@expo/vector-icons';
import cn from "classnames";
import { IField } from './field.interface'
import Button from '../buttons/Button'

const Field: FC<IField> = ({field, state, hint, className, textContentType, defaultValue, ...rest }) => {

	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	useEffect(() => {
		defaultValue && field.value === undefined && field.onChange(defaultValue)
	})

	const onEndEditing = (text: string) => {
		field.onChange(text.trim())
	}

	return (
		<>
			{!!state.error && (
				<Text className={`z-10 text-danger text-xs font-medium`}>
					{state.error.message}
				</Text>
			)}
			<View className={`relative`}>
				<TextInput
					{...rest}
					className={cn(`bg-gray/5 border-gray/5 border-[1px] pl-4 pr-[10%] py-2 text-black text-sm font-medium my-2 rounded-lg w-full`, className)}
					value={field.value}
					defaultValue={defaultValue}
					onEndEditing={(e) => onEndEditing(e.nativeEvent.text)}
					onBlur={field.onBlur}
					onChangeText={field.onChange}
					multiline={false}
					autoCapitalize={"none"}
					placeholderTextColor={`#999999`}
					secureTextEntry={textContentType === 'password' && !isPasswordVisible}
					style={{
						minHeight: 50,
						borderColor:
							!field.value && !state.error
								? 'rgba(88, 88, 92, 0.05)'
								: state.error
									? '#F23C30'
									: '#5FA957'
					}}
				/>
				{textContentType === 'password' && (
					<Button className={`absolute right-3 top-[35%]`} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
						<Entypo color={'#666666'} size={20} name={!isPasswordVisible ? "eye-with-line" : "eye"}/>
					</Button>
				)}
			</View>
			{hint && (
				<Text className={`text-gray/50 text-xs font-medium`}>{hint}</Text>
			)}
		</>
	);
};

export default Field;
