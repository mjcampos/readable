import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {postVote, deletePost} from '../actions/posts';

class PostDetail extends Component {
	convertTimestampToDate(timestamp) {
		var d = new Date(timestamp);

		return d.toDateString();
	}


	onButtonClick = (option) => {
		var {id} = this.props.post;

		this.props.postVote(id, {option});
	}

	render() {
		var {post, comments} = this.props;

		return (
			<div id="PostDetail">
				<h4 className="text-center">{post.title}</h4>
				<p><b>Date:</b> {this.convertTimestampToDate(post.timestamp)}</p>
				<p>{post.body}</p>
				<p><b>Vote Score:</b> {post.voteScore}</p>
				<p><b>Comment Count:</b> {comments.length}</p>

				<div className="row">
					<div className="col-sm-3 text-center">
						<button className="btn btn-primary" onClick={() => this.onButtonClick("upVote")}>Up Vote</button>
					</div>

					<div className="col-sm-3 text-center">
						<button className="btn btn-warning" onClick={() => this.onButtonClick("downVote")}>Down Vote</button>
					</div>

					<div className="col-sm-3 text-center">
						<button className="btn btn-danger" onClick={() => this.props.deletePost(post.id)}>Delete</button>
					</div>

					<div className="col-sm-3 text-center">
						<Link to={`/post/edit/${post.id}`} className="btn btn-success">Edit</Link>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		comments: state.comments.filter(comment => comment.parentId === props.post.id)
	}
}

export default connect(mapStateToProps, {postVote, deletePost})(PostDetail);