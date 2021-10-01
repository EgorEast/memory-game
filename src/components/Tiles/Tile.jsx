import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCheckedTile } from '../../store/tilesSlice';

import './Tile.scss';

export const Tile = ({ color, index }) => {
	const dispatch = useDispatch();
	const [isChanged, setIsChanged] = useState(false);
	const isClosedTiles = useSelector((state) => state.tiles.isClosed);
	const [classesTitCont, setClassesTitCont] = useState(
		`tile-container ${color}`
	);

	useEffect(() => {
		if (isChanged || !isClosedTiles)
			setClassesTitCont(`tile-container ${color}`);
		else setClassesTitCont(`tile-container ${color} changed`);
	}, [color, isChanged, isClosedTiles]);

	const handleTile = () => {
		setIsChanged(true);
		dispatch(addCheckedTile({ class: color, id: index }));
	};
	return (
		<div className={classesTitCont}>
			<div className='flipper'>
				<div className='front'>
					<div className='tile'></div>
				</div>
				<div className='back'>
					<div className={`tile active`} id={index} onClick={handleTile}></div>
				</div>
			</div>
		</div>
	);
};
