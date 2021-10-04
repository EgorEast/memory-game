import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tile } from '../Tile/Tile';
// import {  } from '../../store/tilesSlice';
// import {  } from '../../store/gameSlice';
import './Board.scss';

export const Board = () => {
	const dispatch = useDispatch();
	const collectionTiles = useSelector((state) => state.tiles.collection);

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
	}, [dispatch]);

	const tileCount = 4;

	return (
		<div className='board' style={{ '--tile-count': tileCount }}>
			{collectionTiles.map((value, index) => {
				return <Tile key={value + index} color={value} index={index} />;
			})}
		</div>
	);
};

const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
