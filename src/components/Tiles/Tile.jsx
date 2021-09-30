import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Tile.scss';

export const Tile = ({ color }) => {
	const [isChanged, setIsChanged] = useState(false);
	const isClosedTiles = useSelector((state) => state.tiles.isClosed);
	const [classesTitCont, setClassesTitCont] = useState(
		`tile-container ${color}`
	);

	useEffect(() => {
		if (isChanged || !isClosedTiles) {
			setClassesTitCont(`tile-container ${color}`);
		} else setClassesTitCont(`tile-container ${color} changed`);
	}, [color, isChanged, isClosedTiles]);
	return (
		<div
			className={classesTitCont}
			ontouchstart="this.classList.toggle('hover')"
		>
			<div className='flipper'>
				<div className='front'>
					<div className='tile' onClick={() => setIsChanged(false)}></div>
				</div>
				<div className='back'>
					<div
						className={`tile active`}
						onClick={() => setIsChanged(true)}
					></div>
				</div>
			</div>
		</div>
	);
};
