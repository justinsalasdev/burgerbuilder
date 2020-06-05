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
            const newStateStart = deepClone(state);
            newStateStart.fetching = true;
            return newStateStart;


        case actions.FETCH_ORDERS_SUCCESS:
            const newStateSuccess = deepClone(state);
            newStateSuccess.orders = action.orders;
            newStateSuccess.fetching = false;
            return newStateSuccess

        
        case actions.FETCH_ORDERS_FAIL:
            const newStateFail = deepClone(state);
            newStateFail.fetching = false;
            return newStateFail

        
        
        default:
            return state

    }
}

export default reducer;