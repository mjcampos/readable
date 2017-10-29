import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">Readable</Link>
					</div>

					<div className="navbar-right">
						<Link to="/post/new" className="navbar-text">New Post</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;