import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsStartGame, setLvl } from '../store/gameSlice';

export const StartPage = () => {
	const dispatch = useDispatch();

	return (
		<div className='start-page'>
			<button
				onClick={() => dispatch(setIsStartGame(true))}
				className='start-button'
			>
				START
			</button>
			<button onClick={() => dispatch(setLvl(0))} className='reset-button'>
				Reset Level
			</button>
		</div>
	);
};
