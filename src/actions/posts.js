import * as ReadableAPI from '../utils/ReadableAPI';

export var GET_POSTS = 'GET_POSTS';
export var GET_POST = 'GET_POST';

var getPosts = (posts) => {
	return {
		type: GET_POSTS,
		posts
	}
}

var getPost = (post) => {
	return {
		type: GET_POST,
		post
	}
}

export var importPosts = () => dispatch => {
	ReadableAPI.getPosts().then(posts => {
		dispatch(getPosts(posts));
	});
}

export var importPostsByCategory = (category) => dispatch => {
	ReadableAPI.getPostsForCategory(category).then(posts => {
		dispatch(getPosts(posts));
	});
}

export var importPostDetails = (post_id) => dispatch => {
	ReadableAPI.getPostDetails(post_id).then(post => {
		var arr = [];

		if(!post.error) arr.push(post);

		dispatch(getPost(arr));
	});
}

export var addNewPost = (post) => dispatch => {
	ReadableAPI.addPost(post);
}

export var editPost = (post_id, params) => dispatch => {
	ReadableAPI.editPost(post_id, params);
}

export var postVote = (id, option) => dispatch => {
	ReadableAPI.postVote(id, option).then(post => {
		var arr = [];

		arr.push(post);

		dispatch(getPost(arr));
	});
}