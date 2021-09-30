import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsStart } from '../store/gameSlice';
import { Board } from './Board';

export const GamePage = () => {
	const dispatch = useDispatch();
	return (
		<div className='game-page'>
			<button
				className='back-button'
				onClick={() => dispatch(setIsStart(false))}
			></button>
			<Board />
		</div>
	);
};
