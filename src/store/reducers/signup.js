import * as actions from '../actions/actions';

const initialState = {
    error: null,
    loading: false,
    endType: ''
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.SIGNUP_START:{
            const _ = deepClone(initialState);
            _.loading = true;
            return _;
        }

        case actions.SIGNUP_END:{
            const _ = deepClone(state);
            _.loading = false
            _.endType = action.endType
            return _;
        }

        case actions.SIGNUP_CONFLICT:{
            const _ = deepClone(state);
            _.error = action.error
            _.loading = false
            return _;
        }

        default: 
            return (state)
    }
}

export default reducer;