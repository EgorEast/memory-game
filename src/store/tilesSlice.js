import { createSlice } from '@reduxjs/toolkit';

const tilesSlice = createSlice({
	name: 'tiles',
	initialState: {
		collection: [],
		openTiles: [],
		clearedCards: [],
	},
	reducers: {
		setCollection(state, action) {
			state.collection = action.payload;
		},
		setOpenTiles(state, action) {
			state.openTiles = action.payload;
		},
		setClearedCards(state, action) {
			state.clearedCards = action.payload;
		},
	},
});

export const { setCollection, setOpenTiles, setClearedCards } =
	tilesSlice.actions;

export default tilesSlice.reducer;
