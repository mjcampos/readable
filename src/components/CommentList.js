import React, {Component} from 'react';
import {connect} from 'react-redux';
import {importComments} from '../actions/comments';
import Comment from './Comment';

class CommentList extends Component {
	componentWillMount() {
		// var {parentId} = this.props;

		// this.props.importComments(parentId);
	}

	render() {
		var {comments} = this.props;

		return (
			<div id="CommentList">
				{comments.length ? 
						<div>
							<h5 className="text-center">Comments</h5>

							<ol>
								{comments.map(comment => (
									<Comment key={comment.id} comment={comment}/>
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

function mapStateToProps(state, props) {
	// console.log(props);

	return {
		comments: state.comments.filter(comment => comment.parentId === props.parentId)
	};
}

export default connect(mapStateToProps, {importComments})(CommentList);