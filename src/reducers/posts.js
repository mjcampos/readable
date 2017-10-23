import {GET_POSTS, GET_POST} from '../actions/posts';

function postsReducer(state = [], action) {
	switch(action.type) {
		case GET_POSTS:
			return action.posts;
		case GET_POST:
			return action.post;
		default:
			return state;
	}
}

export default postsReducer;