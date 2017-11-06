import * as ReadableAPI from '../utils/ReadableAPI';

export var GET_POSTS = 'GET_POSTS';
export var ADD_POST = 'ADD_POST';
export var EDIT_POST_VOTE = 'EDIT_POST_VOTE';

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