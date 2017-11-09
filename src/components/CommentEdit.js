import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editComment} from '../actions/comments';

var _ = require('lodash');

class CommentEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			body: (typeof props.comment !== 'undefined') ? props.comment.body : ""
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			body: nextProps.comment.body
		});
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		var {comment_id} = this.props.match.params;
		var {body} = this.state;

		if(body.trim().length) {
			var input = {
				body,
				timestamp: Date.now()
			}

			this.props.editComment(comment_id, input);

			window.location.replace(window.location.origin + "/category/" + this.props.post.category + "/" + this.props.post.id);
		}
	}

	render() {
		var {comment} = this.props;

		var noCommentFound = () => {
			return (
				<div>
					<h4 className="text-center">No Comment Found to edit</h4>
				</div>
			);
		}

		return (
			<div className="container">
				<h4 className="text-center">CommentEdit</h4>

				{!_.isEmpty(comment) ?
						<div>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label>Body</label>
									<textarea className="form-control" type="text" name="body" value={this.state.body} onChange={this.handleInputChange}></textarea>
								</div>

								<div className="text-center">
									<button className="btn btn-primary">Submit</button>
								</div>
							</form>
						</div>
					:
						noCommentFound()
				}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	var {comment_id} = props.match.params;
	var comment = state.comments.filter(comment => comment.id === comment_id)[0];

	return {
		post: state.posts.filter(post => post.id === comment.parentId)[0],
		comment
	};
}

export default connect(mapStateToProps, {editComment})(CommentEdit);