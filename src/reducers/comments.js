import {GET_COMMENTS, EDIT_COMMENT_VOTE, DELETE_COMMENT, ADD_NEW_COMMENT, EDIT_COMMENT} from '../actions/comments';

function commentsReducer(state = [], action) {
	var newState;

	switch(action.type) {
		case GET_COMMENTS:
			return action.comments.sort((commentA, commentB) => commentB.voteScore - commentA.voteScore);
		case EDIT_COMMENT_VOTE:
			return state.map(comment => {
				if(comment.id === action.comment.id) comment.voteScore = action.comment.voteScore

				return comment;
			}).sort((commentA, commentB) => commentB.voteScore - commentA.voteScore);
		case DELETE_COMMENT:
			newState = state.filter(comment => comment.id !== action.comment.id);

			return newState;
		case ADD_NEW_COMMENT:
			return state.concat(action.comment).sort((commentA, commentB) => commentB.voteScore - commentA.voteScore);
		case EDIT_COMMENT:
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