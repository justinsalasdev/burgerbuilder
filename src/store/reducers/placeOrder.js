import * as actions from '../actions/actions';

const initialState = {
    loading: false,
    purchased: false,
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){


        case actions.CHECKOUT_BURGER: {
            const _ = deepClone(state);
            _.purchased = false
            return _
        }

        case actions.PURCHASE_BURGER_SUCCESS:{
            const _ = deepClone(state);
            _.loading = false;
            _.purchased = true;
            return _
        }

        
        case actions.PURCHASE_BURGER_FAIL:{
            const _ = deepClone(state);
            _.loading = false;
            return _
        }

        
        case actions.PURCHASE_BURGER_START:{
            const _ = deepClone(state);
            _.loading = true;
            return _;
        }
        
        default:
            return state

    }
}

export default reducer;