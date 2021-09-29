import { configureStore } from '@reduxjs/toolkit';
import anyValSlice from './anyValSlice';

export const store = configureStore({
	reducer: {
		anyVal: anyValSlice,
	},
});
