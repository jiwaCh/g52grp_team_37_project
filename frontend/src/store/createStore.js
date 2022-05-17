import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import reducers from './reducers';

export default (history, initialState) => {
  const middleware = [thunk, routerMiddleware(history)];

  const enhancers = [];

  if (typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), ...enhancers));

  return store;
};
