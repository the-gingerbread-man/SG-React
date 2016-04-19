import React from 'react';
import { render } from 'react-dom';
import Board from '/board.jsx';

class app extende React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="react-container">
				<h2>Cool!</h2>
			</div>
			);
	}
}

render(<App />, document.getElementById('container'));