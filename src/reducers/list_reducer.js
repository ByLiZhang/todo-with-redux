import types from '../actions/types';


const DEFAULT_STATE = {
    items: [],
    singleItem: {}
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
    	case types.GET_LIST_DATA:
    		console.log('LIST REDUCER - GET LIST:', action.payload);
    		return {...state, items: action.payload.data.todos};
    	case types.GET_SINGLE_ITEM:
    		console.log('Get single item:', action);
    		return {...state, singleItem: action.payload.data.todo};
        default:
            return state;
    }
}
