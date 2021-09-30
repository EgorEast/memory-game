import React from 'react';
import { useSelector } from 'react-redux';
import './app.scss';
import { GamePage } from './components/GamePage';
import { StartPage } from './components/StartPage';

function App() {
	const isStart = useSelector((state) => state.game.isStart);

	if (isStart) return <GamePage />;
	else return <StartPage />;
}

export default App;
