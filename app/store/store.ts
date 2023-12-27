import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import {api} from './api/api'
import { rootReducer } from './root-reducers'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['auth', 'order', ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false
		})
			.concat(api.middleware)
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof store.getState>
