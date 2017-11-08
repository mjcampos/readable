import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class PostSummary extends Component {
	convertTimestampToDate(timestamp) {
		var d = new Date(timestamp);

		return d.toDateString();
	}

	render() {
		var {post} = this.props;
		var {comments} = this.props;

		return (
			<li>
				<Link to={`/category/${post.category}/${post.id}`}><h4>{post.title}</h4></Link>
				<p><b>Category:</b> {post.category}</p>
				<p><b>Vote Score:</b> {post.voteScore}</p>
				<p><b>Date:</b> {this.convertTimestampToDate(post.timestamp)}</p>
				<p><b>Comment Count:</b> {comments.length}</p>
			</li>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		comments: state.comments.filter(comment => comment.parentId === props.post.id)
	}
}

export default connect(mapStateToProps, null)(PostSummary);