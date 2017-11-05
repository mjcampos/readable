import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editPost} from '../actions/posts';

var _ = require('lodash');

class PostEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: (typeof props.post !== 'undefined') ? props.post.title : "",
			body: (typeof props.post !== 'undefined') ? props.post.body : ""
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			title: nextProps.post.title,
			body: nextProps.post.body
		});
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		var {post_id} = this.props.match.params;

		// Validators for the inputs
		var {title, body} = this.state;

		if(title.trim().length && body.trim().length) {
			var input = {
				title,
				body
			};

			this.props.editPost(post_id, input);

			window.location.replace(window.location.origin + "/category/" + this.props.post.category + "/" + this.props.post.id);
		}
	}

	render() {
		var {post} = this.props;

		var noPostFound = () => {
			return (
				<div>
					<h4 className="text-center">No Post Found to edit</h4>
				</div>
			);
		}

		return (
			<div className="container">
				<h4 className="text-center">Post Edit</h4>

				{!_.isEmpty(post) ?
						<div>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label>Title</label>
									<input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
								</div>

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
						noPostFound()
				}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	var {post_id} = props.match.params;

	return {
		post: state.posts.filter(post => post.id === post_id)[0]
	};
}

export default connect(mapStateToProps, {editPost})(PostEdit);