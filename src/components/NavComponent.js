import React from 'react'
import { Link } from 'react-router-dom'

export default class NavComponent extends React.Component {
	render() {	
		return (

			<nav class="navbar navbar-default">

				<div class="navbar-header">
					<a class="navbar-brand" href="#">ReactJS</a>
				</div>

				<div class="container">
					<ul class="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
				</div>

			</nav>

		)
	}
}