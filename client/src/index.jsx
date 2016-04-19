import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		// Put your main React component inside the div
		return (
			<div className="container">
			</div>
			);
	}
}

ReactDOM.render(<App />,document.getElementById("container"));
// You should probably use the ReactDOM to render your app on the page here...