import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Category extends Component {
	convertTimestampToDate(timestamp) {
		var d = new Date(timestamp);

		return d.toDateString();
	}

	render() {
		var {category} = this.props.match.params;

		return (
			<div>
				<h2 className="text-center">Category: {category}</h2>

				<ul>
					{this.props.posts.map(post => (
						<li key={post.id}>
							<Link to=""><h3>{post.title}</h3></Link>
							<p><b>Date:</b> {this.convertTimestampToDate(post.timestamp)}</p>
							<p><b>Author</b>: {post.author}</p>
							<h4>{post.body}</h4>
							<p>Vote Score: {post.voteScore}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	var {category} = ownProps.match.params;

	return {
		posts: state.posts.filter(post => post.category === category)
	};
}

export default connect(mapStateToProps, null)(Category);