import { createSlice } from '@reduxjs/toolkit';

const anyValSlice = createSlice({
	name: 'anyVal',
	initialState: {
		any: 'grid',
	},
	reducers: {
		setAny(state, action) {
			state.anyVal = action.payload;
		},
	},
});

export const { anyVal: anyVal } = anyValSlice.actions;

export default anyVal.reducer;
