import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.js';

class App extends React.Component {
  render () {

    return (
		<div>
			<p> Hello React.</p>
			<AwesomeComponent title="Front End Development" />
		</div>
    )

  }
}

render(<App/>, document.getElementById('app'));