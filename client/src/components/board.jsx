import React from 'react';
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

	drop(rowIndex) {
		let spaces = this.state.spaces;
		let turn = this.state.turn;
		
		for (let i = 5; i >= 0; i--) {
			if (spaces[i][rowIndex] === 'E') {
				spaces[i] = turn;
				if (turn = 'R') turn = 'B';
				else turn = 'R';
				this.setState({ turn: turn, spaces: spaces });
				break;
			}
		}
	}

	render() {
		const buttons = new Array(7).map((_, index) => {
			return (<td><Button drop={this.drop} row={index} /></td>);
		});

		console.log(buttons);

		const rows = this.state.spaces.map((row, rowIndex) => {
			const spaces = row.map((space, spaceIndex) => {
				return (
					<Space key={`${rowIndex}${spaceIndex}`} color={space} />
					);
			});

			return (
				<tr key={rowIndex} className="board-row">
					{ spaces }
				</tr>
				);
		});
		return (
			<table className="board">
				<tbody>
					<tr> { buttons } </tr>
					{ rows }
				</tbody>
			</table>
			);
	}
}

export default Board;