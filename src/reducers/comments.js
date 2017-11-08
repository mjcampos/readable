import * as types from '../actions/types';

function commentsReducer(state = [], action) {
	switch(action.type) {
		case types.GET_COMMENTS:
			return state.concat(action.comments);
		case types.EDIT_COMMENT_VOTE:
			return state.map(comment => {
				if(comment.id === action.comment.id) comment.voteScore = action.comment.voteScore

				return comment;
			}).sort((commentA, commentB) => commentB.voteScore - commentA.voteScore);
		case types.DELETE_COMMENT:
			return state.filter(comment => comment.id !== action.comment.id);
		case types.ADD_NEW_COMMENT:
			return state.concat(action.comment).sort((commentA, commentB) => commentB.voteScore - commentA.voteScore);
		case types.EDIT_COMMENT:
			return state.map(comment => {
				if(comment.id === action.comment.id) comment = action.comment;

				return comment;
			});
		default:
			return state;
	}
}

export default commentsReducer;