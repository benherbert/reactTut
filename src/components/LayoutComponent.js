import React from 'react';

import HeadingComponent from './HeadingComponent.js';
import TeamComponent from './TeamComponent.js';

export default class Layout extends React.Component {

	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render() {

		return (

			<div>

				<HeadingComponent title={this.props.title} />

				<div class="row">
					<div class="col-md-12">

						<div class="form-group">
							<label>Heading Text:</label>
							<input 
							 	type="text"
								class="form-control"
								value={this.props.title} 
								onChange={this.handleChange.bind(this)} />
						</div>
						
					</div>
				</div>

				<div class="row">
					<TeamComponent />
				</div>

			</div>

		);
	}
}