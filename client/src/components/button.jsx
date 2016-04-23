import React from 'react';

class Button extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		console.log("Rendering button: ", this.props.row);
		return (
			<button className="drop-button" onClick={() => { this.props.drop(this.props.value); }}>
			{this.props.value}
			</button>
			);
	}
}

export default Button;