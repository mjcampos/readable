import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Import actions to bring in all the posts and categories
import {importPostsToState} from './actions/posts';
import {importCategoriesToState} from './actions/categories';

var store = createStore(rootReducer, applyMiddleware(thunk));

// store.subscribe(() => {
// 	console.log('Store', store.getState());
// });

// Import all posts and categories from API call
store.dispatch(importPostsToState());
store.dispatch(importCategoriesToState());

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);