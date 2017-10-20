import {combineReducers} from 'redux';

import categories from './categories.js';
import posts from './posts.js';

var rootReducer = combineReducers({
	categories,
	posts
});

export default rootReducer;