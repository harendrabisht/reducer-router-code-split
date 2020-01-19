import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Configure the store
export default function configureStore() {
	const store = createStore(createReducer(), composeWithDevTools());

	// Add a dictionary to keep track of the registered async reducers
	store.asyncReducers = {};

	// Create an inject reducer function
	// This function adds the async reducer, and creates a new combined reducer
	store.injectReducer = (key, asyncReducer) => {
		store.asyncReducers[key] = asyncReducer;
		store.replaceReducer(createReducer(store.asyncReducers));
	};

	// Return the modified store
	return store;
}

function createReducer(asyncReducers) {
	return combineReducers({
		...asyncReducers
	});
}
