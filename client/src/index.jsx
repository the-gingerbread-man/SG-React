import React from 'react';
import { render } from 'react-dom';
import Board from './components/board.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="react-container">
			<Board />
			</div>
			);
	}
}

render(<App />, document.getElementById('container'));