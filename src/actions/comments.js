import * as ReadableAPI from '../utils/ReadableAPI';
import * as types from './types';

var getComments = (comments) => {
	return {
		type: types.GET_COMMENTS,
		comments
	}
}

var editCommentVote = (comment) => {
	return {
		type: types.EDIT_COMMENT_VOTE,
		comment
	}
}

var deleteComment = (comment) => {
	return {
		type: types.DELETE_COMMENT,
		comment
	}
}

var addNewComment = (comment) => {
	return {
		type: types.ADD_NEW_COMMENT,
		comment
	}
}

var editCommentReducer = (comment) => {
	return {
		type: types.EDIT_COMMENT,
		comment
	}
}

export var importComments = (post_id) => dispatch => {
	ReadableAPI.getCommentsForPost(post_id).then(comments => dispatch(getComments(comments)));
}

export var addComment = (comment) => dispatch => {
	ReadableAPI.addComment(comment).then(comment => dispatch(addNewComment(comment)));
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