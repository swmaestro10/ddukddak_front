import {FETCH_TERMINAL} from '../action/index';

export default function(state = 0, action){
	switch(action.type){
	case FETCH_TERMINAL:
		return action.payload;
	}
	return state;
}
