import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducers } from './reducers';
export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))