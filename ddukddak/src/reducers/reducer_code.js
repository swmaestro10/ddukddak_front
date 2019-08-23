import {FETCH_CODE} from '../action/index';

export default function(state = [], action){
    switch(action.type){
    case FETCH_CODE:
        return action.payload;
    }
    return state;
}
