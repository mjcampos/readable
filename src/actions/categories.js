import * as ReadableAPI from '../utils/ReadableAPI';
import * as types from './types';

var getCategories = (categoryArr) => {
	return {
		type: types.GET_CATEGORIES,
		categoryArr
	}
}

export var importCategories = () => dispatch => {
	ReadableAPI.getCategories().then(categories => dispatch(getCategories(categories)));
}