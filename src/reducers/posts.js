import {SET_POSTS} from '../actions/posts';

function postsReducer(state = [], action) {
	switch(action.type) {
		case SET_POSTS:
			return action.postArr;
		default:
			return state;
	}
}

export default postsReducer;