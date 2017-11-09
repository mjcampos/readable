import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {commentVote, removeComment} from '../actions/comments';

class Comment extends Component {
	constructor(props) {
		super(props);

		this.state = {
			body: props.comment.body
		}
	}

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
				<div className="row">
					<div className="form-group col-sm-2">
						<p>{comment.author}</p>
						<p><b>Vote Score:</b> {comment.voteScore}</p>
					</div>

					<div className="form-group col-sm-10">
						<p>{this.state.body}</p>
					</div>

				</div>

				<div className="row">
					<div className="col-sm-3">
						<button className="btn btn-primary" onClick={() => this.onButtonClick("upVote")}>Up Vote</button>
					</div>

					<div className="col-sm-3">
						<button className="btn btn-warning" onClick={() => this.onButtonClick("downVote")}>Down Vote</button>
					</div>

					<div className="col-sm-3">
						<button className="btn btn-danger" onClick={() => this.onDelete()}>Delete</button>
					</div>

					<div className="col-sm-3">
						<Link to={`/comment/${comment.id}`} className="btn btn-success">Edit</Link>
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