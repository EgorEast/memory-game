import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCollection } from '../../store/tilesSlice';
import {
	setIsGameStarted,
	setShouldDisableAllCards,
} from '../../store/gameSlice';
import { Tile } from '../Tile/Tile';

import './GamePage.scss';

const uniqueTilesArray = [
	{ type: 'light-green', background: '#c5e0b4' },
	{ type: 'light-blue', background: '#b4c7e7' },
	{ type: 'orange', background: '#ED7D31' },
	{ type: 'green', background: '#548235' },
	{ type: 'yellow', background: '#FFD966' },
	{ type: 'blue', background: '#4472C4' },
	{ type: 'gray', background: '#AFABAB' },
	{ type: 'purple', background: '#7030A0' },
];

const lvlRules = [
	{ rangeOfLvls: [1, 3], numOfTilesInSide: 2 },
	{ rangeOfLvls: [4, 8], numOfTilesInSide: 4 },
	{ rangeOfLvls: [9, 13], numOfTilesInSide: 6 },
];

export const GamePage = () => {
	const dispatch = useDispatch();
	const isGameStarted = useSelector((state) => state.game.isGameStarted);
	const currentLvl = useSelector((state) => state.game.currentLvl);
	const isLvlStarted = useSelector((state) => state.game.isLvlStarted);
	const isRestartLvl = useSelector((state) => state.game.isRestartLvl);
	const shouldDisableAllCards = useSelector(
		(state) => state.game.shouldDisableAllCards
	);
	const moves = useSelector((state) => state.game.moves);

	const tilesCollection = useSelector((state) => state.tiles.collection);
	const openTiles = useSelector((state) => state.tiles.openTiles);
	const clearedCards = useSelector((state) => state.tiles.clearedCards);

	const timeout = useRef(null);

	const disable = () => {
		dispatch(setShouldDisableAllCards(true));
	};
	const enable = () => {
		dispatch(setShouldDisableAllCards(false));
	};

	useEffect(() => {
		if (isGameStarted) {
			dispatch(
				setCollection(shuffleTiles(uniqueTilesArray.concat(uniqueTilesArray)))
			);
		}
	}, [dispatch, isGameStarted]);

	return (
		<div className='game-page'>
			<button
				className='back-button'
				onClick={() => {
					dispatch(setIsGameStarted(false));
				}}
			></button>
			<div className='current-lvl'>{currentLvl}</div>

			<div className='board' style={{ '--tile-count': 4 }}>
				{tilesCollection.map((tile, index) => {
					return (
						<Tile
							key={tile.type + index}
							onClick
							tile={tile}
							index={index}
							isInactive
							isFlipped
							isDisabled
						/>
					);
				})}
			</div>
		</div>
	);
};

const shuffleTiles = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
