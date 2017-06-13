import React from 'react';

class AwesomeComponent extends React.Component {

	constructor(props) {

		super(props);

		console.log(props);

		this.people = [
			{
				id: 0,
				name: "Ben Herbert"
			}, 
			{
				id: 1, 
				name: "Ida Hedding Werner"
			}, 
			{
				id: 2,
				name: "James Baker"
			}
		]

		this.peopleListItems = this.people.map( (person) =>
		  <li key={person.id.toString()} data={person.name}>{person.name}</li>
		);

	}


	render () {

		return (
			<div>
				<h1>{this.props.title}</h1>
				<ul>
					{this.peopleListItems}
				</ul>
			</div>
		)

	}


}

export default AwesomeComponent;