import * as ReadableAPI from '../utils/ReadableAPI';

export var GET_COMMENTS = 'GET_COMMENTS';

var getComments = (comments) => {
	return {
		type: GET_COMMENTS,
		comments
	}
}

export var importComments = (post_id) => dispatch => {
	ReadableAPI.getCommentsForPost(post_id).then(comments => {
		dispatch(getComments(comments));
	});
}