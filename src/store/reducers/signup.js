import * as actions from '../actions/actions';

const initialState = {
    error: null,
    loading: false,
    isSignupComplete: false
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.SIGNUP_START:{
            const _ = deepClone(state);
            _.loading = true;
            _.error = null;
            return _;
        }

        case actions.SIGNUP_SUCCESS:{
            const _ = deepClone(state);
            _.isSignupComplete = true
            _.error = null
            _.loading = false
            return _;
        }

        case actions.SIGNUP_FAIL:{
            const _ = deepClone(state);
            _.error = action.error
            _.loading = false
            return _;
        }

        case actions.SIGNUP_CLEAR:{
            const _ = deepClone(state);
            _.isSignupComplete = false
            return _;
        }
        
        default: 
            return (state)
    }
}

export default reducer;