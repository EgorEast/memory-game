import { createSlice } from '@reduxjs/toolkit';

const tilesSlice = createSlice({
	name: 'tiles',
	initialState: {
		isClosed: false,
		isNecesMix: true,
		checkedTiles: [],
		collection: [],
	},
	reducers: {
		setIsClosed(state, action) {
			state.isClosed = action.payload;
		},
		setIsNecesMix(state, action) {
			state.isNecesMix = action.payload;
		},
		setCollection(state, action) {
			state.collection = action.payload;
		},
		addCheckedTile(state, action) {
			state.checkedTiles.push(action.payload);
		},
		cleanCheckedTiles(state) {
			state.checkedTiles = [];
		},
	},
});

export const {
	setIsClosed,
	setIsNecesMix,
	setCollection,
	addCheckedTile,
	cleanCheckedTiles,
} = tilesSlice.actions;

export default tilesSlice.reducer;
