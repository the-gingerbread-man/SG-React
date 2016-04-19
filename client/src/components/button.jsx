import React from 'react';

class Button extends React.component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className="drop-button" onClick={() => { this.props.drop(this.props.row); }} />
			);
	}
}