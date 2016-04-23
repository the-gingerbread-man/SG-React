import React from 'react';

class Space extends React.Component {

	constructor(props) {
		super(props)
	}
	
	render() {
		return (
						<span className={`${this.props.color}-space`}>O</span>
					);
	}
}

export default Space;