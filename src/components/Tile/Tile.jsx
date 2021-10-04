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
		if (!isFlipped && !isDisabled) onClick(index);
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
				<div className='tile' style={{ background: 'black' }}></div>
			</div>
		</div>
	);
};
