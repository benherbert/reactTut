/*
*******************
	Packages
*******************
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'


/*
*******************
	Components
*******************
*/
import NavComponent from './components/NavComponent.js';
import PageComponent from './components/PageComponent.js';


/*
*******************
	App
*******************
*/
const App = () => (

	<Router>
		<div class="container">
			<NavComponent />
			<PageComponent />
		</div>
	</Router>

)


/*
*******************
	Render
*******************
*/
const root = document.getElementById('root')

ReactDOM.render((
	<App />
), root)