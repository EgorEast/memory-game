import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsClosed } from '../../store/tilesSlice';
import { setIsStartGame } from '../../store/gameSlice';

import { Board } from '../Board/Board';

import './GamePage.scss';

export const GamePage = () => {
	const dispatch = useDispatch();
	// const timer = 3000;
	// useEffect(() => {
	// 	if (checkedTiles.length >= 2) {
	// 		if (checkedTiles[0].class !== checkedTiles[1].class) {

	// 			setTimeout(() => {
	// 			}, timer);
	// 		} else {
	// 		}
	// 	}
	// }, [ dispatch]);

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
