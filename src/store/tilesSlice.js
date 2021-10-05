import { createSlice } from '@reduxjs/toolkit';

const tilesSlice = createSlice({
	name: 'tiles',
	initialState: {
		collection: [],
		openTiles: [],
		clearedTiles: [],
	},
	reducers: {
		setCollection(state, action) {
			state.collection = action.payload;
		},
		setOpenTiles(state, action) {
			state.openTiles = action.payload;
		},
		addOpenTile(state, action) {
			state.openTiles.push(action.payload);
		},
		setClearedTiles(state, action) {
			state.clearedTiles = action.payload;
		},
		addClearedTile(state, action) {
			state.clearedTiles.push(action.payload.type);
		},
	},
});

export const {
	setCollection,
	setOpenTiles,
	addOpenTile,
	setClearedTiles,
	addClearedTile,
} = tilesSlice.actions;

export default tilesSlice.reducer;
