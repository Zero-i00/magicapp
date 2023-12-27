import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form'
import { TextInputProps } from 'react-native'


export interface IFieldProps {
	field: ControllerRenderProps<any, any>
	state: ControllerFieldState
	hint?: string
}

export type TypeFieldProps = IFieldProps & TextInputProps

export interface IField extends TypeFieldProps {}
