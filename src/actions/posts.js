import * as ReadableAPI from '../utils/ReadableAPI';

export var GET_POSTS = 'GET_POSTS';
export var ADD_POST = 'ADD_POST';
export var EDIT_POST_VOTE = 'EDIT_POST_VOTE';
export var SORT_BY_VOTE = 'SORT_BY_VOTE';
export var SORT_BY_DATE = 'SORT_BY_DATE';
export var DELETE_POST = 'DELETE_POST';

var getPosts = (posts) => {
	return {
		type: GET_POSTS,
		posts
	}
}

var addPost = (post) => {
	return {
		type: ADD_POST,
		post
	}
}

var editPostVote = (post) => {
	return {
		type: EDIT_POST_VOTE,
		post
	}
}

var deletePostFromReducer = (post) => {
	return {
		type: DELETE_POST,
		post
	}
}

export var sortByDate = () => {
	return {
		type: SORT_BY_DATE
	}
}

export var sortByVote = () => {
	return {
		type: SORT_BY_VOTE
	}
}

export var importPosts = () => dispatch => {
	ReadableAPI.getPosts().then(posts => dispatch(getPosts(posts)));
}

export var addNewPost = (post) => dispatch => {
	ReadableAPI.addPost(post).then(post => dispatch(addPost(post)));
}

export var editPost = (post_id, params) => dispatch => {
	ReadableAPI.editPost(post_id, params);
}

export var postVote = (id, option) => dispatch => {
	ReadableAPI.postVote(id, option).then(post => dispatch(editPostVote(post)));
}

export var deletePost = (id) => dispatch => {
	ReadableAPI.deletePost(id).then(post => dispatch(deletePostFromReducer(post)));
}