import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
	name: 'game',
	initialState: {
		isGameStarted: false,
		currentLvl: 1,
		shouldDisableAllTiles: false,
		numOfTilesInSide: 2,
	},
	reducers: {
		setIsGameStarted(state, action) {
			state.isGameStarted = action.payload;
		},
		setCurrentLvl(state, action) {
			state.currentLvl = action.payload;
		},
		incrementCurrentLvl(state) {
			state.currentLvl++;
		},
		setShouldDisableAllTiles(state, action) {
			state.shouldDisableAllTiles = action.payload;
		},
		setNumOfTilesInSide(state, action) {
			state.numOfTilesInSide = action.payload;
		},
	},
});

export const {
	setIsGameStarted,
	setCurrentLvl,
	incrementCurrentLvl,
	setShouldDisableAllTiles,
	setNumOfTilesInSide,
} = gameSlice.actions;

export default gameSlice.reducer;
