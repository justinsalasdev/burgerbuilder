import * as actions from '../actions/actions';

const initialState = {
    orders: [],
    loading: false,
    fetchMessage: null
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actions.FETCH_START:
            const _ = deepClone(initialState);
            _.loading = true;
            return _;

        case actions.FETCH_STORE:{
            const _ = deepClone(state);
            _.orders = action.orders;
            _.loading = false;
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