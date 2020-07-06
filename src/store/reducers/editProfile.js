import * as actions from '../actions/actions';

const initialState = {
    isEditing: false,
    loading: false,
    error: null
}

function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.PROFILE_EDIT_START:{
            const _ = deepClone(state);
            _.isEditing = true;
            return _;
        }

        case actions.PROFILE_SAVE_START:{
            const _ = deepClone(state);
            _.loading = true
            return _;
        }

        case actions.PROFILE_SAVE_FAILED:{
                const _ = deepClone(state);
                _.error = action.error
                _.loading = false
                return _;
            
        }

        case actions.PROFILE_SAVE_END:{
            const _ = deepClone(state);
            _.loading = false
            _.error = null;
            return _;
        }

        case actions.PROFILE_EDIT_END:{
            const _ = deepClone(state);
            _.isEditing = false;
            return _;
        }

        default: 
            return (state)
    }
}

export default reducer;