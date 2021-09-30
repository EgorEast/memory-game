import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsStart } from '../store/gameSlice';

export const StartPage = () => {
	const dispatch = useDispatch();

	return (
		<div className='start-page'>
			<button
				onClick={() => dispatch(setIsStart(true))}
				className='start-button'
			>
				START
			</button>
		</div>
	);
};
