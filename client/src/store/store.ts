import { configureStore } from '@reduxjs/toolkit'
import $api from './api'
import listenerMiddleware from './middlewares/SaveToken.middleware'
import rootReducer from './slices'

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat($api.middleware)
			.prepend(listenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
