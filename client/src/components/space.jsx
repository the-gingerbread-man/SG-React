import React from 'react';

class Space extends React.Component {

	constructor(props) {
		super(props)
	}
	
	render() {
		return (
						<div className={`${this.props.color}-space`}>O</div>
					);
	}
}

export default Space;