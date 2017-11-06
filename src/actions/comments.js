import * as ReadableAPI from '../utils/ReadableAPI';

export var GET_COMMENTS = 'GET_COMMENTS';
export var EDIT_COMMENT_VOTE = 'EDIT_COMMENT_VOTE';
export var DELETE_COMMENT = 'DELETE_COMMENT';
export var ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export var EDIT_COMMENT = 'EDIT_COMMENT';

var getComments = (comments) => {
	return {
		type: GET_COMMENTS,
		comments
	}
}

var editCommentVote = (comment) => {
	return {
		type: EDIT_COMMENT_VOTE,
		comment
	}
}

var deleteComment = (comment) => {
	return {
		type: DELETE_COMMENT,
		comment
	}
}

var addNewComment = (comment) => {
	return {
		type: ADD_NEW_COMMENT,
		comment
	}
}

var editCommentReducer = (comment) => {
	return {
		type: EDIT_COMMENT,
		comment
	}
}

export var importComments = (post_id) => dispatch => {
	ReadableAPI.getCommentsForPost(post_id).then(comments => {
		dispatch(getComments(comments));
	});
}

export var addComment = (comment) => dispatch => {
	ReadableAPI.addComment(comment).then(comment => {
		// dispatch(importComments(comment.parentId));
		dispatch(addNewComment(comment));
	});
}

export var commentVote = (id, option) => dispatch => {
	ReadableAPI.commentVote(id, option).then(comment => {
		dispatch(editCommentVote(comment));
	});
}

export var removeComment = (id) => dispatch => {
	ReadableAPI.deleteComment(id).then(comment => dispatch(deleteComment(comment)));
}

export var editComment = (id, comment) => dispatch => {
	ReadableAPI.editComment(id, comment).then(comment => dispatch(editCommentReducer(comment)));
}