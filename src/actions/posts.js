import * as ReadableAPI from '../utils/ReadableAPI';
import * as types from './types';
import {importComments} from './comments';

var getPosts = (posts) => {
	return {
		type: types.GET_POSTS,
		posts
	}
}

var addPost = (post) => {
	return {
		type: types.ADD_POST,
		post
	}
}

var editPostVote = (post) => {
	return {
		type: types.EDIT_POST_VOTE,
		post
	}
}

var deletePostFromReducer = (post) => {
	return {
		type: types.DELETE_POST,
		post
	}
}

export var sortByDate = () => {
	return {
		type: types.SORT_BY_DATE
	}
}

export var sortByVote = () => {
	return {
		type: types.SORT_BY_VOTE
	}
}

export var importPosts = () => dispatch => {
	ReadableAPI.getPosts().then(posts => {
		posts.map(post => {
			dispatch(importComments(post.id));

			return post;
		});

		dispatch(getPosts(posts))
	});
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