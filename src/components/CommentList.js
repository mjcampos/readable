import React, {Component} from 'react';

class CommentList extends Component {
	render() {
		var {comments} = this.props;

		return (
			<div id="CommentList">
				{comments.length ? 
						<div>
							<h5 className="text-center">Comments</h5>

							<ol>
								{comments.map(comment => (
									<li key={comment.id}>
										<p>{comment.body} - {comment.author}</p>
										<p><b>Vote Score:</b> {comment.voteScore}</p>
									</li>
								))}
							</ol>
						</div>
					:
						<div className="text-center">
							<h5>No comments yet</h5>
						</div>
				}
			</div>
		);
	}
}

export default CommentList;