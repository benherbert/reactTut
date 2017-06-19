import React from 'react';

export default class SortButtonComponent extends React.Component {

	constructor(props) {

		super(props)

		this.state = {
			label: "Click me"
		}


	}

	updateState () {

		this.setState({
    		label: "clicked"
		})

	}


	render() {

		return (
			<button 
				class={'btn btn-primary'}
				onClick={this.updateState.bind(this)}
			>
				{this.state.label}
			</button>
			
		)

	}
}