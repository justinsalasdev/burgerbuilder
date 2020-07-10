import * as actions from '../actions/actions';

const initialState = {
    editing: false,
    loading: false,
    errorMessage: null
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.PROFILE_EDIT_START:{
            const _ = deepClone(initialState);
            _.editing = true;
            return _;
        }

        case actions.PROFILE_SAVE_START:{
            const _ = deepClone(state);
            _.loading = true
            return _;
        }

        case actions.PROFILE_SAVE_FAILED:{
                const _ = deepClone(state);
                _.errorMessage = action.errorMessage
                _.loading = false
                return _;
        }

        case actions.PROFILE_SAVE_END:{
            const _ = deepClone(state);
            _.loading = false
            return _;
        }

        case actions.PROFILE_EDIT_END:{
            const _ = deepClone(state);
            _.editing = false;
            return _;
        }

        default: 
            return (state)
    }
}

export default reducer;