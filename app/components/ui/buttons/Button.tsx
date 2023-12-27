import React, { FC, PropsWithChildren } from 'react'
import { TouchableOpacity } from 'react-native'
import { DEFAULT_ACTIVE_OPACITY } from '../../../constants/base.constants'
import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({children, ...rest}) => {
	return (
		<TouchableOpacity {...rest} activeOpacity={DEFAULT_ACTIVE_OPACITY}>
			{children}
		</TouchableOpacity>
	)
}

export default Button
