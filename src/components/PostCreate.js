import React, {Component} from 'react';
import {connect} from 'react-redux';
import {importCategories} from '../actions/categories';
import {addNewPost} from '../actions/posts';
import uuid from 'uuid/v1';

class PostCreate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
			author: "",
			category: "react"
		}
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		// Validators for the inputs
		var {title, body, author} = this.state;

		// If inputs are valid then make the submission
		if(title.trim().length && body.trim().length && author.trim().length) {
			var input = {
				id: uuid(),
				timestamp: Date.now(),
				title,
				body,
				author,
				category: this.state.category
			}

			this.props.addNewPost(input);

			// Upon completion redirect to Main page and see the new Post list
			window.location.replace(window.location.origin);
		}
	}

	render() {
		return (
			<div className="container">
				<h4 className="text-center">Create New Post</h4>

				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Title</label>
						<input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
					</div>

					<div className="form-group">
						<label>Body</label>
						<textarea className="form-control" name="body" value={this.state.body} onChange={this.handleInputChange}></textarea>
					</div>

					<div className="form-group">
						<label>Author</label>
						<input className="form-control" type="text" name="author" value={this.state.author} onChange={this.handleInputChange}/>
					</div>

					<div className="form-group">
						<select className="form-control" name="category" value={this.state.category} onChange={this.handleInputChange}>
							{this.props.categories.map(category => (
								<option key={category.path} value={category.path}>{category.name}</option>
							))}
						</select>
					</div>

					<button className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		categories: state.categories
	}
}

export default connect(mapStateToProps, {importCategories, addNewPost})(PostCreate);