import * as ReadableAPI from '../utils/ReadableAPI';

export var GET_CATEGORIES = 'GET_CATEGORIES';

var getCategories = (categoryArr) => {
	return {
		type: GET_CATEGORIES,
		categoryArr
	}
}

export var importCategories = () => dispatch => {
	ReadableAPI.getCategories().then(categories => {
		dispatch(getCategories(categories));
	});
}