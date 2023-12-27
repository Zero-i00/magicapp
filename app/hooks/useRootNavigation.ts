import { TypeRootStackParamList } from '../navigation/navigation.types'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export const useRootNavigation = () => {
	return useNavigation<NavigationProp<TypeRootStackParamList>>()
}
