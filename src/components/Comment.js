import React, {Component} from 'react';

class Comment extends Component {
	render() {
		var {comment} = this.props;

		return (
			<li>
				<p>{comment.body} - {comment.author}</p>
				<p><b>Vote Score:</b> {comment.voteScore}</p>
			</li>
		);
	}
}

export default Comment;