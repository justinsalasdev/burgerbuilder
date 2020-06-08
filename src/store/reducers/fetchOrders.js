import * as actions from '../actions/actions';

const initialState = {
    orders: [],
    fetching: false,
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        
        case actions.FETCH_ORDERS_START:
            const _ = deepClone(state);
            _.fetching = true;
            return _;


        case actions.FETCH_ORDERS_SUCCESS:{
            const _ = deepClone(state);
            _.orders = action.orders;
            _.fetching = false;
            return _
        }

        
        case actions.FETCH_ORDERS_FAIL:{
            const _ = deepClone(state);
            _.fetching = false;
            return _
        }
        
        
        default:
            return state

    }
}

export default reducer;