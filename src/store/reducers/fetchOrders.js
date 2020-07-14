import * as actions from '../actions/actions';

const initialState = {
    orders: [],
    loading: false,
    fetchMessage: null,
    ordersStatus: 'outdated'
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actions.FETCH_START:
            const _ = deepClone(state); 
            _.loading = true;
            return _;

        case actions.FETCH_STORE:{
            const _ = deepClone(state);
            _.orders = action.orders;
            _.loading = false;
            return _
        }
        
        case actions.UPDATE_ORDER_STATUS:{
            const _ = deepClone(state);
            _.ordersStatus = action.status
            return _
        }

        case actions.FETCH_FAIL:{
            const _ = deepClone(state);
            _.fetchMessage = action.fetchMessage
            _.loading = false;
            return _
        }
        
        default:
            return state

    }
}

export default reducer;