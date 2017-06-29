import React from 'react';
import ProgressBarComponent from '../components/ProgressBarComponent.js';

export default class TeamComponent extends React.Component {

	constructor() {

		super();
		this.people = require('../data/data.js');

	}

	peopleMap(people) {

		return this.people.map( (person, index, arr) => 

			<div 
				key={person.id} 
				data={person.name} 
				class="col-md-4">

				<div class="panel panel-default">

					<div class="panel-heading">

						<h4>
							{person.name}&nbsp;
							 <small>{person.role}</small>
						</h4>

						<span class="label label-default">
							{person.team}
						</span>

					</div>

					<div class="panel-body">
						{this.skillMap(person)}
					</div>

				</div>

			</div>

		)

	}

	skillMap(person) {

		return person.skills.map( (skill, index, arr) => 

			<div key={index}>
				<ProgressBarComponent title={skill.name} progress={skill.percentage} />
			</div>

		)

	}

	render() {

		return (
			<div>
				{this.peopleMap(this.people)}
			</div>
		)

	}


}