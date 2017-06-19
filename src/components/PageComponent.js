/*
*******************
	Packages
*******************
*/
import React from 'react'
import { Route } from 'react-router-dom'

/*
*******************
	Pages
*******************
*/
import Home from '../pages/Home.js'
import About from '../pages/About.js'

/*
*******************
	Render
*******************
*/
export default class PageComponent extends React.Component {
	render() {	
		return (
			<div class="container">
				<div class="row">
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</div>
			</div>
		)
	}
}