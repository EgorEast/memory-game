import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setIsClosed,
	setIsNecesMix,
	cleanCheckedTiles,
} from '../store/tilesSlice';
import {
	setIsStartGame,
	incrementLvl,
	setIsStartNextLvl,
	setIsFailedLvl,
	incrementCountGuessedCouplesTiles,
	resetCountGuessedCouplesTiles,
	setIsCompletedLvl,
} from '../store/gameSlice';

import { Board } from './Board';

export const GamePage = () => {
	const dispatch = useDispatch();
	const checkedTiles = useSelector((state) => state.tiles.checkedTiles);
	const isCompletedLvl = useSelector((state) => state.game.isCompletedLvl);
	const numberAllCouplesTiles = useSelector(
		(state) => state.game.numberAllCouplesTiles
	);
	const countGuessedCouplesTiles = useSelector(
		(state) => state.game.countGuessedCouplesTiles
	);

	const timer = 3000;
	useEffect(() => {
		if (checkedTiles.length >= 2) {
			if (checkedTiles[0].class !== checkedTiles[1].class) {
				dispatch(
					setIsClosed(false),
					setIsNecesMix(true),
					setIsFailedLvl(true),
					resetCountGuessedCouplesTiles()
				);

				setTimeout(() => {
					dispatch(setIsClosed(true), setIsFailedLvl(false));
				}, timer);
			} else {
				dispatch(incrementCountGuessedCouplesTiles(1));
			}
			dispatch(cleanCheckedTiles());
		}
	}, [checkedTiles, dispatch]);

	useEffect(() => {
		if (numberAllCouplesTiles === countGuessedCouplesTiles) {
			dispatch(incrementLvl(1), setIsCompletedLvl(true));
		}
	}, [countGuessedCouplesTiles, numberAllCouplesTiles, dispatch]);

	useEffect(() => {
		if (isCompletedLvl) {
			dispatch(setIsStartNextLvl(true));
		}
	}, [dispatch, isCompletedLvl]);

	return (
		<div className='game-page'>
			<button
				className='back-button'
				onClick={() => {
					dispatch(setIsStartGame(false), setIsClosed(false));
				}}
			></button>
			<Board />
		</div>
	);
};
