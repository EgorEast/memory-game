import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
	name: 'game',
	initialState: {
		isGameStarted: false,
		currentLvl: 1,
		isLvlStarted: false,
		isRestartLvl: false,
		shouldDisableAllCards: false,
		moves: 0,
	},
	reducers: {
		setIsGameStarted(state, action) {
			state.isGameStarted = action.payload;
		},
		setCurrentLvl(state, action) {
			state.currentLvl = action.payload;
		},
		setIsLvlStarted(state, action) {
			state.isLvlStarted = action.payload;
		},
		setIsRestartLvl(state, action) {
			state.isRestartLvl = action.payload;
		},
		setShouldDisableAllCards(state, action) {
			state.shouldDisableAllCards = action.payload;
		},
		setMoves(state, action) {
			state.moves = action.payload;
		},
	},
});

export const {
	setIsGameStarted,
	setCurrentLvl,
	setIsLvlStarted,
	setIsRestartLvl,
	setShouldDisableAllCards,
	setMoves,
} = gameSlice.actions;

export default gameSlice.reducer;
