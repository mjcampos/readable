import React, {Component} from 'react';
import {connect} from 'react-redux';
import {commentVote, removeComment} from '../actions/comments';

class Comment extends Component {
	onButtonClick = (option) => {
		var comment_id = this.props.comment.id;

		this.props.commentVote(comment_id, {option});
	}

	onDelete = () => {
		var comment_id = this.props.comment.id;

		this.props.removeComment(comment_id);
	}

	render() {
		var {comment} = this.props;

		return (
			<li>
				<p>{comment.body} - {comment.author}</p>

				<div className="row">
					<div className="col-sm-3">
						<p><b>Vote Score:</b> {comment.voteScore}</p>
					</div>

					<div className="col-sm-3">
						<button className="btn btn-primary" onClick={() => this.onButtonClick("upVote")}>Up Vote</button>
					</div>

					<div className="col-sm-3">
						<button className="btn btn-warning" onClick={() => this.onButtonClick("downVote")}>Down Vote</button>
					</div>

					<div className="col-sm-3">
						<button className="btn btn-danger" onClick={() => this.onDelete()}>Delete</button>
					</div>
				</div>
			</li>
		);
	}
}

function mapStateToProps(state) {
	return {
		state
	};
}

export default connect(mapStateToProps, {commentVote, removeComment})(Comment);