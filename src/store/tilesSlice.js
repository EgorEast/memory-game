import { createSlice } from '@reduxjs/toolkit';

const tilesSlice = createSlice({
	name: 'tiles',
	initialState: {
		isClosed: false,
		isNecesMix: true,
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
	},
});

export const { setIsClosed, setIsNecesMix, setCollection } = tilesSlice.actions;

export default tilesSlice.reducer;
