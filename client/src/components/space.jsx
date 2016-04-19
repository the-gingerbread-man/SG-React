import React from 'react';

class Space extends React.Component {

	constructor(props) {
		super(props)
	}
	
	render() {
		return (
						<td className={`${this.props.color}-space`}>O</td>
					);
	}
}

export default Space;