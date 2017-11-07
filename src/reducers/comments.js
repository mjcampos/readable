import * as types from '../actions/types';

function commentsReducer(state = [], action) {
	var newState;

	switch(action.type) {
		case types.GET_COMMENTS:
			return action.comments.sort((commentA, commentB) => commentB.voteScore - commentA.voteScore);
		case types.EDIT_COMMENT_VOTE:
			return state.map(comment => {
				if(comment.id === action.comment.id) comment.voteScore = action.comment.voteScore

				return comment;
			}).sort((commentA, commentB) => commentB.voteScore - commentA.voteScore);
		case types.DELETE_COMMENT:
			newState = state.filter(comment => comment.id !== action.comment.id);

			return newState;
		case types.ADD_NEW_COMMENT:
			return state.concat(action.comment).sort((commentA, commentB) => commentB.voteScore - commentA.voteScore);
		case types.EDIT_COMMENT:
			newState = state.map(comment => {
				if(comment.id === action.comment.id) comment = action.comment;

				return comment;
			});

			return newState;
		default:
			return state;
	}
}

export default commentsReducer;