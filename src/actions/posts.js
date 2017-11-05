import * as ReadableAPI from '../utils/ReadableAPI';

export var GET_POSTS = 'GET_POSTS';
export var GET_POST = 'GET_POST';
export var ADD_POST = 'ADD_POST';
export var EDIT_POST_VOTE = 'EDIT_POST_VOTE';

var getPosts = (posts) => {
	return {
		type: GET_POSTS,
		posts
	}
}

// var getPost = (post) => {
// 	return {
// 		type: GET_POST,
// 		post
// 	}
// }

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
	ReadableAPI.getPosts().then(posts => {
		dispatch(getPosts(posts));
	});
}

export var addNewPost = (post) => dispatch => {
	ReadableAPI.addPost(post).then(post => {
		dispatch(addPost(post));
	})
}

export var editPost = (post_id, params) => dispatch => {
	ReadableAPI.editPost(post_id, params);
}

export var postVote = (id, option) => dispatch => {
	ReadableAPI.postVote(id, option).then(post => {
		// var arr = [];

		// arr.push(post);

		// dispatch(getPost(arr));

		dispatch(editPostVote(post));
	});
}