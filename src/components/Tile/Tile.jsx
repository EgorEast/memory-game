import React from 'react';
import classnames from 'classnames';

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
		if (!isInactive) {
			return { background: 'black' };
		}
		return { background: tile.background };
	};

	return (
		<div
			className={classnames('tile-container', {
				'is-flipped': isFlipped,
				'is-inactive': isInactive,
			})}
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
