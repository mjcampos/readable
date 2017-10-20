import * as ReadableAPI from '../utils/ReadableAPI';

export var SET_POSTS = 'SET_POSTS';

var setPosts = (postArr) => {
	return {
		type: SET_POSTS,
		postArr
	}
}

export var importPostsToState = () => dispatch => {
	ReadableAPI.getPosts().then(posts => {
		dispatch(setPosts(posts));
	});
}