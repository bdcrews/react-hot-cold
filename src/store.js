import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {hotColdGameReducer} from './reducers';

export default createStore(hotColdGameReducer, applyMiddleware(thunk));
