import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setCollection,
	setOpenTiles,
	addOpenTile,
	setClearedTiles,
	addClearedTile,
} from '../../store/tilesSlice';
import {
	setIsGameStarted,
	incrementCurrentLvl,
	setShouldDisableAllTiles,
	setNumOfTilesInSide,
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
	{ rangeOfLvls: [4, 7], numOfTilesInSide: 4 },
	{ rangeOfLvls: [8, 11], numOfTilesInSide: 6 },
];

export const GamePage = () => {
	const dispatch = useDispatch();
	const isGameStarted = useSelector((state) => state.game.isGameStarted);
	const currentLvl = useSelector((state) => state.game.currentLvl);
	const shouldDisableAllTiles = useSelector(
		(state) => state.game.shouldDisableAllTiles
	);
	const numOfTilesInSide = useSelector((state) => state.game.numOfTilesInSide);
	const tilesCollection = useSelector((state) => state.tiles.collection);
	const openTiles = useSelector((state) => state.tiles.openTiles);
	const clearedTiles = useSelector((state) => state.tiles.clearedTiles);

	const getAllTiles = useCallback(() => {
		const numUniqueTiles = Math.pow(numOfTilesInSide, 2) / 2;
		const uniqueTiles = uniqueTilesArray.filter((elem, index) =>
			index < numUniqueTiles ? elem : null
		);
		const allTiles = uniqueTiles.concat(uniqueTiles);
		return allTiles;
	}, [numOfTilesInSide]);

	const disableAllTiles = () => {
		dispatch(setShouldDisableAllTiles(true));
	};
	const enableAllTiles = useCallback(() => {
		dispatch(setShouldDisableAllTiles(false));
	}, [dispatch]);

	const checkIsFlipped = (index) => {
		return openTiles.includes(index);
	};

	const checkIsInactive = (tile) => {
		return clearedTiles.includes(tile.type);
	};

	const resetLvlData = useCallback(() => {
		dispatch(setClearedTiles([]));
		dispatch(setOpenTiles([]));
		dispatch(setShouldDisableAllTiles(false));
		dispatch(setCollection(shuffleTiles(getAllTiles())));
	}, [dispatch, getAllTiles]);

	const checkCompletion = useCallback(() => {
		if (clearedTiles.length === tilesCollection.length / 2) {
			resetLvlData();
			dispatch(incrementCurrentLvl());
		}
	}, [clearedTiles.length, dispatch, resetLvlData, tilesCollection]);

	const compare = useCallback(() => {
		const [first, second] = openTiles;
		enableAllTiles();
		if (tilesCollection[first].type === tilesCollection[second].type) {
			dispatch(addClearedTile(tilesCollection[first]));
			dispatch(setOpenTiles([]));
			return;
		}

		setTimeout(() => {
			dispatch(setOpenTiles([]));
		}, 500);
	}, [dispatch, enableAllTiles, openTiles, tilesCollection]);

	const handleClickTile = (index) => {
		if (openTiles.length === 1) {
			dispatch(addOpenTile(index));
			disableAllTiles();
		} else {
			dispatch(setOpenTiles([index]));
		}
	};

	useEffect(() => {
		if (openTiles.length === 2) setTimeout(compare, 300);
	}, [compare, openTiles]);

	useEffect(() => {
		checkCompletion();
	}, [checkCompletion]);

	useEffect(() => {
		if (isGameStarted) {
			resetLvlData();
		}
	}, [isGameStarted, resetLvlData]);

	useEffect(() => {
		lvlRules.forEach((elem) => {
			const levels = getArrNumbersFromRange(elem.rangeOfLvls);
			if (levels.includes(currentLvl))
				dispatch(setNumOfTilesInSide(elem.numOfTilesInSide));
		});
	}, [currentLvl, dispatch]);

	return (
		<div className='game-page'>
			<button
				className='back-button'
				onClick={() => {
					dispatch(setIsGameStarted(false));
				}}
			></button>
			<div className='current-lvl'>{currentLvl}</div>

			<div className='board' style={{ '--tile-count': numOfTilesInSide }}>
				{tilesCollection.map((tile, index) => {
					return (
						<Tile
							key={tile.type + index}
							onClick={handleClickTile}
							tile={tile}
							index={index}
							isInactive={checkIsInactive(tile)}
							isFlipped={checkIsFlipped(index)}
							isDisabled={shouldDisableAllTiles}
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

const getArrNumbersFromRange = (arr) => {
	const [startNum, endNum] = arr;
	const newArr = [];
	for (let i = startNum; i <= endNum; i++) newArr.push(i);
	return newArr;
};
