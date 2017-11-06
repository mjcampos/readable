import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {sortByDate, sortByVote} from '../actions/posts';

class Main extends Component {
	convertTimestampToDate(timestamp) {
		var d = new Date(timestamp);

		return d.toDateString();
	}

	render() {
		return (
			<div className="container">
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
					<h4 className="text-center">Sort by: <a onClick={() => this.props.sortByVote()}>Vote</a> | <a onClick={() => this.props.sortByDate()}>Date (Most Recent On Top)</a></h4>

					<ul>
						{this.props.posts.map(post => (
							<li key={post.id}>
								<Link to={`/category/${post.category}/${post.id}`}><h4>{post.title}</h4></Link>
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
	console.log("Alpha");

	return {
		categories: state.categories,
		posts: state.posts
	};
}

export default connect(mapStateToProps, {sortByDate, sortByVote})(Main);