import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favReducer from './favReducer';

const combinedReducers = combineReducers({movieReducer, favReducer})

export default combinedReducers;