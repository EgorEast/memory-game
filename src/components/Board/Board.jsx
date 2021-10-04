import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tile } from '../Tile/Tile';
import {
	setIsClosed,
	setIsNecesMix,
	setCollection,
} from '../../store/tilesSlice';
import {
	setNumberAllCouplesTiles,
	setIsStartNextLvl,
} from '../../store/gameSlice';

import './Board.scss';

export const Board = () => {
	const dispatch = useDispatch();
	const isNecesMixTiles = useSelector((state) => state.tiles.isNecesMix);
	const collectionTiles = useSelector((state) => state.tiles.collection);
	const isStartNextLvl = useSelector((state) => state.game.isStartNextLvl);
	// const windowWidth = window.innerWidth;
	// const windowHeight = window.innerHeight;
	// const boardSize =
	// 	windowWidth <= windowHeight ? windowWidth - 100 : windowHeight - 100;

	useEffect(() => {
		const colors = [
			'light-green',
			'light-blue',
			'orange',
			'green',
			'yellow',
			'blue',
			'gray',
			'purple',
		];

		let cards = repeat(colors, 2);
		let mixCards = mix(cards);
		dispatch(setIsNecesMix(false), setNumberAllCouplesTiles(colors.length));

		dispatch(setCollection(mixCards));
	}, [dispatch, isNecesMixTiles]);

	const timer = 3000;
	useEffect(() => {
		if (isStartNextLvl) {
			setTimeout(() => {
				dispatch(setIsClosed(true), setIsStartNextLvl(false));
			}, timer);
		}
	}, [dispatch, isStartNextLvl]);

	return (
		<div
			className='board'
			// style={{ width: boardSize, height: boardSize }}
		>
			{collectionTiles.map((value, index) => {
				return <Tile key={value + index} color={value} index={index} />;
			})}
		</div>
	);
};

const repeat = (a, n) => (n-- ? a.concat(repeat(a, n)) : []);
const mix = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
