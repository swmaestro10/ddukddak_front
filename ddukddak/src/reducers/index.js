import { combineReducers } from 'redux';

import CodeReducers from './reducer_code';

const rootReducer = combineReducers({
    code : CodeReducers
});

export default rootReducer;