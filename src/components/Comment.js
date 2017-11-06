import React, {Component} from 'react';
import {connect} from 'react-redux';
import {commentVote, removeComment, editComment} from '../actions/comments';

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

	onEdit = (comment) => {
		var {body} = this.state;
		var {id} = comment;

		// Validator for the input
		if(body.trim().length) {
			var input = {
				body,
				timestamp: Date.now()
			}

			this.props.editComment(id, input);
		}
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
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
						<textarea className="form-control" type="text" name="body" value={this.state.body} onChange={this.handleInputChange}></textarea>
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
						<button className="btn btn-success" onClick={() => this.onEdit(comment)}>Edit</button>
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

export default connect(mapStateToProps, {commentVote, removeComment, editComment})(Comment);