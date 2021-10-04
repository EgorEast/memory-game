import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsGameStarted, setCurrentLvl } from '../../store/gameSlice';
import './StartPage.scss';

export const StartPage = () => {
	const dispatch = useDispatch();

	return (
		<div className='start-page'>
			<button
				onClick={() => dispatch(setIsGameStarted(true))}
				className='start-button'
			>
				START
			</button>
			<button
				onClick={() => dispatch(setCurrentLvl(1))}
				className='reset-button'
			>
				Reset Level
			</button>
		</div>
	);
};
