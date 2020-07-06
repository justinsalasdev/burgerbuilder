import * as actions from '../actions/actions';

const initialState = {
    userData: {},
    loading: false,
    error: null
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.PROFILE_RETRIEVE_START:{
            const _ = deepClone(state);
            _.loading = true;
            return _;
        }

        case actions.PROFILE_RETRIEVE_END:{
            const _ = deepClone(state);
            _.loading = false;
            return _;
        }

        case actions.PROFILE_SAVE_USER:{
                const _ = deepClone(state);
                _.userData = action.userData
                return _;
        }

        case actions.PROFILE_RETRIEVE_FAIL:{
            const _ = deepClone(state);
            _.loading = false
            _.error = action.error;
            return _;
        }

        default: 
            return (state)
    }
}

export default reducer;