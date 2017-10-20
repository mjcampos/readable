import * as ReadableAPI from '../utils/ReadableAPI';

export var SET_CATEGORIES = 'SET_CATEGORIES';

var setCategories = (categoryArr) => {
	return {
		type: SET_CATEGORIES,
		categoryArr
	}
}

export var importCategoriesToState = () => dispatch => {
	ReadableAPI.getCategories().then(categories => {
		dispatch(setCategories(categories));
	});
}