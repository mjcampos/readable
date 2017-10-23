import {combineReducers} from 'redux';

import categories from './categories.js';
import posts from './posts.js';
import comments from './comments.js';

var rootReducer = combineReducers({
	categories,
	posts,
	comments
});

export default rootReducer;