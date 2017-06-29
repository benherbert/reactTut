import React from 'react';

export default class ProgressBarComponent extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {

		return (
			<div>
				<h6>{this.props.title}</h6>
				<div class="progress">
					<div class={
							'progress-bar ' + 
							(this.props.progress >= 69 ? ' progress-bar-success ' : '') +
							(this.props.progress <= 49 ? ' progress-bar-danger ' : '')
						} 
						style={{width: this.props.progress + '%'}}>
						<span class="sr-only">{this.props.progress}% Complete</span>
					</div>
				</div>
			</div>
		)

	}


}


