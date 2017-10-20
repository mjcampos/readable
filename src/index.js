import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';
import Category from './components/Category';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

var store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
	console.log('Store', store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={App}/>
				<Route path="/category/:path" component={Category}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);