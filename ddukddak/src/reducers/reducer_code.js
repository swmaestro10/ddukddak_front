import {FETCH_CODE} from '../action/index';

export default function(state = null, action){
    console.log(action.payload);
    switch(action.type){
    case FETCH_CODE:
        return action.payload;
    }
    return state;
}