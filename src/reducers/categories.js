import * as types from '../actions/types';

function categoriesReducer(state = [], action) {
	switch(action.type) {
		case types.GET_CATEGORIES:
			return action.categoryArr;
		default:
			return state;
	}
}

export default categoriesReducer;