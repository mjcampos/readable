import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {importPostDetails, postVote} from '../actions/posts';
import {importComments} from '../actions/comments';
import '../styles/styles.css';

var _ = require('lodash');

class Post extends Component {
	componentWillMount() {
		var {post_id} = this.props.match.params;

		this.props.importPostDetails(post_id);
		this.props.importComments(post_id);
	}

	convertTimestampToDate(timestamp) {
		var d = new Date(timestamp);

		return d.toDateString();
	}

	onButtonClick = (option) => {
		var {post_id} = this.props.match.params;

		this.props.postVote(post_id, {option});
	}

	render() {
		var {post, comments} = this.props;
		var {post_id} = this.props.match.params;
		var noPostFound = () => {
			return (
				<div>
					<h4 className="text-center">No Post Found</h4>
				</div>
			);
		}

		return (
			<div className="container">
				{!_.isEmpty(post) ?
						<div>
							<div className="post_details">
								<h4 className="text-center">{post.title}</h4>
								<p><b>Date:</b> {this.convertTimestampToDate(post.timestamp)}</p>
								<p>{post.body}</p>
								<p><b>Vote Score:</b> {post.voteScore}</p>

								<div className="row">
									<div className="col-sm-4 text-center">
										<button className="btn btn-primary" onClick={() => this.onButtonClick("upVote")}>Up Vote</button>
									</div>

									<div className="col-sm-4 text-center">
										<Link to={`/post/edit/${post_id}`} className="btn btn-success">Edit</Link>
									</div>

									<div className="col-sm-4 text-center">
										<button className="btn btn-danger" onClick={() => this.onButtonClick("downVote")}>Down Vote</button>
									</div>
								</div>
							</div>

							<div className="comments_section">
								{comments.length ? 
										<div>
											<h5 className="text-center">Comments</h5>

											<ol>
												{comments.map(comment => (
													<li key={comment.id}>{comment.body}</li>
												))}
											</ol>
										</div>
									:
										<div className="text-center">
										<h5>No comments yet</h5></div>
								}
							</div>
						</div>
					:
						noPostFound()
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.posts[0],
		comments: state.comments
	};
}

export default connect(mapStateToProps, {importPostDetails, importComments, postVote})(Post);