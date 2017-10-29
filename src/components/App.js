import React, {Component} from 'react';
import Nav from './Nav';
import {Route} from 'react-router-dom';
import Main from './Main';
import Category from './Category';
import Post from './Post';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit';

class App extends Component {
	render() {
		return (
			<div>
				<Nav/>

				<Route exact path="/" component={Main}/>
				<Route exact path="/category/:category" component={Category}/>
				<Route exact path="/category/:category/:post_id" component={Post}/>
				<Route exact path="/post/new" component={PostCreate}/>
				<Route exact path="/post/edit/:post_id" component={PostEdit}/>
			</div>
		);
	}
}

export default App;