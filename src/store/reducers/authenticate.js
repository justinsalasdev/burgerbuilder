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
            return _;
        }

        case actions.AUTH_SUCCESS:{
            const _ = deepClone(state);
            _.token = action.idToken
            _.userId = action.userId
            _.error = null
        }
        
        default: 
            return (state)
    }
}

export default reducer;