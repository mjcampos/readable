import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {importCategoriesToState} from '../actions/categories';
import {importPostsToState} from '../actions/posts';

class App extends Component {
	componentWillMount() {
		this.props.importCategoriesToState();
		this.props.importPostsToState();
	}

	convertTimestampToDate(timestamp) {
		var d = new Date(timestamp);

		return d.toDateString();
	}

	render() {
		return (
			<div>
				<h1 className="text-center">Readable</h1>

				<div className="col-sm-6">
					<h2 className="text-center">Categories</h2>

					<ul>
						{this.props.categories.map(category => (
							<li key={category.path}>
								<Link to={`/category/${category.path}`}><h3>{category.name}</h3></Link>
							</li>
						))}
					</ul>
				</div>

				<div className="col-sm-6">
					<h2 className="text-center">Posts</h2>

					<ul>
						{this.props.posts.map(post => (
							<li key={post.id}>
								<a><h4>{post.title}</h4></a>
								<p><b>Category:</b> {post.category}</p>
								<p><b>Vote Score:</b> {post.voteScore}</p>
								<p><b>Date:</b> {this.convertTimestampToDate(post.timestamp)}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {importCategoriesToState, importPostsToState})(App);