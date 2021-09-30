import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './gameSlice';
import tilesSlice from './tilesSlice';

export const store = configureStore({
	reducer: {
		tiles: tilesSlice,
		game: gameSlice,
	},
});
