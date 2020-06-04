import * as actions from '../actions/actions';

const initialState = {
    orders: [],
    loading: false
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actions.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            console.log(newOrder)
            const newStateSuccess = deepClone(state);
            console.log(newStateSuccess)
            newStateSuccess.loading = false;
            newStateSuccess.orders.push(newOrder);
            return newStateSuccess

        
        case actions.PURCHASE_BURGER_FAIL:
            const newStateFail = deepClone(state);
            newStateFail.loading = false;
            return newStateFail

        
        case actions.PURCHASE_BURGER_START:
            const newStateStart = deepClone(state);
            newStateStart.loading = true;
            return newStateStart;
        
        default:
            return state

    }
}

export default reducer;