import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './auth/AuthSlice'
import $api from '../api'

const rootReducer = combineReducers({
	auth: authSlice,
	[$api.reducerPath]: $api.reducer,
})

export default rootReducer
