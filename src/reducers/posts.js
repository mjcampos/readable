import {GET_POSTS, ADD_POST, EDIT_POST_VOTE} from '../actions/posts';

function postsReducer(state = [], action) {
	var newState = state;

	switch(action.type) {
		case GET_POSTS:
			newState = action.posts.sort((postA, postB) => postB.voteScore - postA.voteScore);

			return newState;
		case ADD_POST:
			newState.push(action.post).sort((postA, postB) => postB.voteScore - postA.voteScore);

			return newState;
		case EDIT_POST_VOTE:
			newState = newState.map(post => {
				if(post.id === action.post.id) post.voteScore = action.post.voteScore;

				return post;
			}).sort((postA, postB) => postB.voteScore - postA.voteScore);

			return newState;
		default:
			return state;
	}
}

export default postsReducer;