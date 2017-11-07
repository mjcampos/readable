import {GET_POSTS, ADD_POST, EDIT_POST_VOTE, SORT_BY_DATE, SORT_BY_VOTE, DELETE_POST} from '../actions/posts';

function postsReducer(state = [], action) {
	var newState = state;

	switch(action.type) {
		case GET_POSTS:
			return action.posts.sort((postA, postB) => postB.voteScore - postA.voteScore);
		case ADD_POST:
			newState.concat(action.post).sort((postA, postB) => postB.voteScore - postA.voteScore);

			return newState;
		case EDIT_POST_VOTE:
			return state.map(post => {
				if(post.id === action.post.id) post.voteScore = action.post.voteScore;

				return post;
			}).sort((postA, postB) => postB.voteScore - postA.voteScore);
		case SORT_BY_DATE:
			return state.sort((postA, postB) => postB.timestamp - postA.timestamp).map(post => post);
		case SORT_BY_VOTE:
			return newState.sort((postA, postB) => postB.voteScore - postA.voteScore).map(post => post);
		case DELETE_POST:
			return state.filter(post => post.id !== action.post.id);
		default:
			return state;
	}
}

export default postsReducer;