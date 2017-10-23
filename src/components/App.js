import React, {Component} from 'react';
import Nav from './Nav';
import {Route} from 'react-router-dom';
import Main from './Main';
import Category from './Category';
import Post from './Post';

class App extends Component {
	render() {
		return (
			<div>
				<Nav/>

				<Route exact path="/" component={Main}/>
				<Route exact path="/:category" component={Category}/>
				<Route exact path="/:category/:post_id" component={Post}/>
			</div>
		);
	}
}

export default App;