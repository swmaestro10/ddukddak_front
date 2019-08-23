import { combineReducers } from 'redux';

import CodeReducers from './reducer_code';
import TerminalReducers from './reducer_terminal';

const rootReducer = combineReducers({
    code : CodeReducers,
    terminal : TerminalReducers 
});

export default rootReducer;
