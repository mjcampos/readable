import React, {Component} from 'react';
import Nav from './Nav';
import {Route} from 'react-router-dom';
import Main from './Main';
import Category from './Category';

class App extends Component {
	render() {
		return (
			<div>
				<Nav/>

				<Route exact path="/" component={Main}/>
				<Route path="/:category" component={Category}/>
			</div>
		);
	}
}

export default App;