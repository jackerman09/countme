import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Counter from './Counter'
import { Counters } from './Counters'

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<Router>
				<div>
					<ul>
				    <li><Link to="/">Home</Link></li>
				    <Link to={{
						  pathname: '/',
						  search: '?counter=2'
						}}>Number 2</Link>
				    <li><Link to="/topics">Topics</Link></li>
				  </ul>

				  <hr/>

				  <Route path='/' component={Counter} />
				  <Counters />
				</div>
			  </Router>
			)
	}
}

// You will need this on the bottom of each component file
// to make it available through ES6 'import' statements.

export default App