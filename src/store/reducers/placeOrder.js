import * as actions from '../actions/actions';


const initialState = {
    loading: false,
    purchased: false,
    checkOutMessage: null,
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        
        
        case actions.PURCHASE_BURGER_START:{
            const _ = deepClone(initialState);
            _.loading = true;
            return _;
        }

        case actions.PURCHASE_BURGER_SUCCESS:{
            const _ = deepClone(state);
            _.loading = false;
            _.checkOutMessage = action.checkOutMessage;
            return _
        }

        case actions.PURCHASE_BURGER_FAIL:{
            const _ = deepClone(state);
            _.loading = false;
            _.checkOutMessage = action.checkOutMessage;
            return _
        }

        default:
            return state

    }
}

export default reducer;