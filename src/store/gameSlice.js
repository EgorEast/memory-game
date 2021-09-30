import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
	name: 'tiles',
	initialState: {
		isStart: false,
		lvl: 1,
		isCompletedLvl: false,
		isFailedLvl: false,
	},
	reducers: {
		setIsStart(state, action) {
			state.isStart = action.payload;
		},
		setLvl(state, action) {
			state.lvl = action.payload;
		},
		setIsCompletedLvl(state, action) {
			state.isCompletedLvl = action.payload;
		},
		setIsFailedLvl(state, action) {
			state.isFailedLvl = action.payload;
		},
	},
});

export const { setIsStart } = gameSlice.actions;

export default gameSlice.reducer;
