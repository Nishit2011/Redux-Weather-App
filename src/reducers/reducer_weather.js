import {FETCH_WEATHER} from '../actions/index';
export default function(state=[], action){
	
	switch(action.type){
		case FETCH_WEATHER:
		//mutating state isnt allowed in redux
		//instead of push out action payload to the state
		//we would rather concat it
		//as concatenating doesnt mutate the state


		//return state.concat([action.payload.data]);

		//the above line can be implemented in es-6 syntax as follows

		return [action.payload.data, ...state];
	}
	return state;
}