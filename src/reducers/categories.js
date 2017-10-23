import {GET_CATEGORIES} from '../actions/categories';

function categoriesReducer(state = [], action) {
	switch(action.type) {
		case GET_CATEGORIES:
			return action.categoryArr;
		default:
			return state;
	}
}

export default categoriesReducer;