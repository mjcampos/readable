import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {sortByDate, sortByVote} from '../actions/posts';
import PostSummary from './PostSummary';

class Main extends Component {
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
							<PostSummary key={post.id} post={post}/>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		categories: state.categories,
		posts: state.posts
	};
}

export default connect(mapStateToProps, {sortByDate, sortByVote})(Main);