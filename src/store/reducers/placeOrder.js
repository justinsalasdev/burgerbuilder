import * as actions from '../actions/actions';

const initialState = {
    loading: false,
    purchased: false
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actions.CHECKOUT_BURGER: 
            const newStateCheckout = deepClone(state);
            newStateCheckout.purchased = false
            return newStateCheckout

        case actions.PURCHASE_BURGER_SUCCESS:
            const newStateSuccess = deepClone(state);
            newStateSuccess.loading = false;
            newStateSuccess.purchased = true;
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