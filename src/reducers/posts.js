import {GET_POSTS, GET_POST, ADD_POST, EDIT_POST_VOTE} from '../actions/posts';

function postsReducer(state = [], action) {
	var newState = state;

	switch(action.type) {
		case GET_POSTS:
			return action.posts;
		case GET_POST:
			return action.post;
		case ADD_POST:
			newState.push(action.post);
			return newState;
		case EDIT_POST_VOTE:
			newState = newState.map(post => {
				if(post.id === action.post.id) post.voteScore = action.post.voteScore;

				return post;
			});

			return newState;
		default:
			return state;
	}
}

export default postsReducer;