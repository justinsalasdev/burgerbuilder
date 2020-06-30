import * as actions from './actions';
import axios from 'axios';

const signupStart = () => {
    return {
        type: actions.SIGNUP_START
    }
}


const signupFail = (error) => {
    return {
        type: actions.SIGNUP_FAIL,
        error: error.response.data.error
    }
}


const signupSuccess = () => {
    return {
        type: actions.SIGNUP_SUCCESS,
    }
}



//exports3
export const signupClear = () => {
    return {
        type: actions.SIGNUP_CLEAR
    }
}



export const signup = (signupData) =>{

    
    const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';
    const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`

    return dispatch => {
        dispatch(signupClear())
        dispatch(signupStart())
        
        axios.post(endPoint, {...signupData,returnSecureToken: true})
            .then(response => {
                dispatch(signupSuccess())
            })
            .catch(error => {
                dispatch(signupFail(error))
            })
    }
}