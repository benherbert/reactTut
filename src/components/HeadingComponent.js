import React from 'react';

export default class HeadingComponent extends React.Component {
	render() {	
		return (
			<div class="page-header">
				 <h1>{this.props.title}</h1>
			</div>
		);
	}
}