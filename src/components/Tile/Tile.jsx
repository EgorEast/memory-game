import React from 'react';

import './Tile.scss';

export const Tile = ({
	onClick,
	tile,
	index,
	isInactive,
	isFlipped,
	isDisabled,
}) => {
	const handleClick = () => {
		if (!isFlipped && !isDisabled && !isInactive) onClick(index);
	};

	const backgrBackFace = () => {
		return isInactive
			? { background: tile.background }
			: { background: 'black' };
	};

	const TileContClasses = () => {
		const classes = [];
		if (isFlipped) classes.push('is-flipped');
		if (isInactive) classes.push('is-inactive');
		return classes.join(' ');
	};

	return (
		<div
			className={`tile-container ${TileContClasses()}`}
			onClick={handleClick}
		>
			<div className='tile-face front'>
				<div className='tile' style={{ background: tile.background }}></div>
			</div>
			<div className='tile-face back'>
				<div className='tile' style={backgrBackFace()}></div>
			</div>
		</div>
	);
};
