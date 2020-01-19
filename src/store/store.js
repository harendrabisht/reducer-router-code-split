import { createStore, combineReducers } from "redux";

// Define the reducers that will always be present in the application

const initialCounter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state + 1;

    default:
      return state;
  }
};
const staticReducers = {
  initial: initialCounter
};

// Configure the store
export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState);

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
    ...staticReducers,
    ...asyncReducers
  });
}
