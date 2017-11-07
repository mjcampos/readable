import * as types from '../actions/types';

function postsReducer(state = [], action) {
	switch(action.type) {
		case types.GET_POSTS:
			return action.posts.sort((postA, postB) => postB.voteScore - postA.voteScore);
		case types.ADD_POST:
			return state.concat(action.post).sort((postA, postB) => postB.voteScore - postA.voteScore);
		case types.EDIT_POST_VOTE:
			return state.map(post => {
				if(post.id === action.post.id) post.voteScore = action.post.voteScore;

				return post;
			}).sort((postA, postB) => postB.voteScore - postA.voteScore);
		case types.SORT_BY_DATE:
			return state.sort((postA, postB) => postB.timestamp - postA.timestamp).map(post => post);
		case types.SORT_BY_VOTE:
			return state.sort((postA, postB) => postB.voteScore - postA.voteScore).map(post => post);
		case types.DELETE_POST:
			return state.filter(post => post.id !== action.post.id);
		default:
			return state;
	}
}

export default postsReducer;