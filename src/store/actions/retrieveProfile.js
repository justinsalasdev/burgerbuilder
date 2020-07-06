import * as actions from './actions';
import axios from 'axios';
import database from '../../axios/database';



const startRetrieve = () => {
    return {
        type: actions.PROFILE_RETRIEVE_START
    }
}

const endRetrieve = () => {
    return {
        type: actions.PROFILE_RETRIEVE_END
    }
}

const handleRetrieveFail = () => {
    return {
        type: actions.PROFILE_RETRIEVE_FAIL
    }
}

const storeUserData = (userData) => {
    return {
        type: actions.PROFILE_SAVE_USER
    }
}

//exports
export const retrieveProfile = (userData) => {

    return dispatch => {
        dispatch(startRetrieve())
        console.log(userData)
    }
}

    

       