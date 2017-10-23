import React, {Component} from 'react';
import {connect} from 'react-redux';
import {importPostDetails} from '../actions/posts';
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

	render() {
		var {post, comments} = this.props;
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
										<div>No</div>
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

export default connect(mapStateToProps, {importPostDetails, importComments})(Post);