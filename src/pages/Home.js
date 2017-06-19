import React from 'react';

import LayoutComponent from '../components/LayoutComponent.js';

export default class Home extends React.Component {

	constructor() {
		super();
		this.state = {
			title: "My Title"
		};
	}

	changeTitle(title) {
		this.setState({title});
	}

	render() {
		return (
 			<LayoutComponent 
 				changeTitle={this.changeTitle.bind(this)} 
 				title={this.state.title} />
		);
	}


}