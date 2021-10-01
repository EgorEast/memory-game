import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
	name: 'game',
	initialState: {
		isStartGame: false,
		lvl: 0,
		isStartNextLvl: false,
		isCompletedLvl: false,
		isFailedLvl: false,
		numberAllCouplesTiles: 0,
		countGuessedCouplesTiles: 0,
	},
	reducers: {
		setIsStartGame(state, action) {
			state.isStartGame = action.payload;
		},
		incrementLvl(state, action) {
			state.lvl += action.payload;
		},
		setLvl(state, action) {
			state.lvl = action.payload;
		},
		setIsStartNextLvl(state, action) {
			state.isStartNextLvl = action.payload;
		},
		setIsCompletedLvl(state, action) {
			state.isCompletedLvl = action.payload;
		},
		setIsFailedLvl(state, action) {
			state.isFailedLvl = action.payload;
		},
		setNumberAllCouplesTiles(state, action) {
			state.numberAllCouplesTiles = action.payload;
		},
		incrementCountGuessedCouplesTiles(state, action) {
			state.countGuessedCouplesTiles += action.payload;
		},
		resetCountGuessedCouplesTiles(state) {
			state.countGuessedCouplesTiles = 0;
		},
	},
});

export const {
	setIsStartGame,
	incrementLvl,
	setLvl,
	setIsStartNextLvl,
	setIsCompletedLvl,
	setIsFailedLvl,
	setNumberAllCouplesTiles,
	incrementCountGuessedCouplesTiles,
	resetCountGuessedCouplesTiles,
} = gameSlice.actions;

export default gameSlice.reducer;
