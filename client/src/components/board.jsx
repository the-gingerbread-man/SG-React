import React from 'react';
import Button from './button.jsx';
import Space from './space.jsx';

class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			turn:'R',
			spaces: [['E', 'E', 'E', 'E', 'E', 'E', 'E'],
							 ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
							 ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
							 ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
							 ['E', 'E', 'E', 'E', 'E', 'E', 'E'],
							 ['E', 'E', 'E', 'E', 'E', 'E', 'E']],
		};
	}

	drop(columnIndex) {
		let spaces = this.state.spaces;
		let turn = this.state.turn;
		
		for (let i = 5; i >= 0; i--) {
			if (spaces[i][columnIndex] === 'E') {
				spaces[i][columnIndex] = turn;
				turn === 'R' ? turn='B' : turn = 'R';
				this.setState({ turn: turn, spaces: spaces });
				console.log(spaces);
				break;
			}
		}
		console.log(this.state.spaces);
	}

	render() {
		const buttons = [];
		for (var i = 0; i < 7; i++) {
			buttons.push(<Button value={i} className="dropButton" drop={this.drop.bind(this)} /> );
		}

		const rows = this.state.spaces.map((row, rowIndex) => {
			
			const spaces = row.map((space, columnIndex) => {
				return (
					<Space className="space" key={`${rowIndex}${columnIndex}`} color={space} />
					);
			});

			return (
				<div className="row" key={rowIndex} >
					{ spaces }
				</div>
				);
		});
		return (
			<div>
				<div className="row"> 
					{buttons} 
				</div>
				
				<div className="game_board">
				{rows}
				</div>
			</div>
			);
	}
}

export default Board;
