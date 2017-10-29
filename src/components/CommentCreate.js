import React, {Component} from 'react';
import uuid from 'uuid/v1';
import {connect} from 'react-redux';
import {addComment} from '../actions/comments';

class CommentCreate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			body: "",
			author: ""
		}
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		var {parentId} = this.props;

		// Validators for the input
		var {body, author} = this.state;

		if(body.trim().length && author.trim().length) {
			var input = {
				id: uuid(),
				timestamp: Date.now(),
				body,
				author,
				parentId
			};

			this.props.addComment(input);

			this.setState({
				body: "",
				author: ""
			});
		}
	}

	render() {
		return (
			<div id="CommentCreate">
				<h4 className="text-center">Write a comment below!</h4>

				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Body</label>
						<textarea className="form-control" type="text" name="body" value={this.state.body} onChange={this.handleInputChange}></textarea>
					</div>

					<div className="form-group">
						<label>Author</label>
						<input className="form-control" type="text" name="author" value={this.state.author} onChange={this.handleInputChange}/>
					</div>

					<div className="text-right">
						<button className="btn btn-primary">Submit Comment</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, {addComment})(CommentCreate);