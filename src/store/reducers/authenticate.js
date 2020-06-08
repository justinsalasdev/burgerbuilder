import * as actions from '../actions/actions';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.AUTH_START:{
            const _ = deepClone(state);
            _.loading = true;
            _.error = null;
            return _;
        }

        case actions.AUTH_SUCCESS:{
            const _ = deepClone(state);
            _.token = action.authData.idToken
            _.userId = action.authData.localId
            _.error = null
            _.loading = false
            return _;
        }

        case actions.AUTH_FAIL:{
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