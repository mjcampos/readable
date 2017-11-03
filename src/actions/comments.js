import * as ReadableAPI from '../utils/ReadableAPI';

export var GET_COMMENTS = 'GET_COMMENTS';

var getComments = (comments) => {
	return {
		type: GET_COMMENTS,
		comments
	}
}

export var importComments = (post_id) => dispatch => {
	ReadableAPI.getCommentsForPost(post_id).then(comments => {
		dispatch(getComments(comments));
	});
}

export var addComment = (comment) => dispatch => {
	ReadableAPI.addComment(comment).then(comment => {
		dispatch(importComments(comment.parentId));
	});
}

export var commentVote = (id, option) => dispatch => {
	ReadableAPI.commentVote(id, option).then(comment => {
		dispatch(importComments(comment.parentId));
	});
}

export var deleteComment = (id) => dispatch => {
	ReadableAPI.deleteComment(id).then(comment => {
		dispatch(importComments(comment.parentId));
	});
}