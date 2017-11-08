import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {postVote, deletePost} from '../actions/posts';

class PostSummary extends Component {
	convertTimestampToDate(timestamp) {
		var d = new Date(timestamp);

		return d.toDateString();
	}

	onVoteClick = (option) => {
		var {id} = this.props.post;

		this.props.postVote(id, {option});
	}

	render() {
		var {post, comments} = this.props;

		return (
			<li>
				<div className="row">
					<div className="col-sm-12">
						<Link to={`/category/${post.category}/${post.id}`}><h4>{post.title}</h4></Link>
						<p><b>Category:</b> {post.category}</p>
						<p><b>Vote Score:</b> {post.voteScore}</p>
						<p><b>Date:</b> {this.convertTimestampToDate(post.timestamp)}</p>
						<p><b>Comment Count:</b> {comments.length}</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-3">
						<button className="btn btn-primary" onClick={() => this.onVoteClick("upVote")}>Up Vote</button>
					</div>
					<div className="col-sm-3">
						<button className="btn btn-warning" onClick={() => this.onVoteClick("downVote")}>Down Vote</button>
					</div>
					<div className="col-sm-3">
						<button className="btn btn-danger" onClick={() => this.props.deletePost(post.id)}>Delete</button>
					</div>
					<div className="col-sm-3">
						<Link to={`/post/edit/${post.id}`} className="btn btn-success">Edit</Link>
					</div>
				</div>
			</li>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		comments: state.comments.filter(comment => comment.parentId === props.post.id)
	}
}

export default connect(mapStateToProps, {postVote, deletePost})(PostSummary);