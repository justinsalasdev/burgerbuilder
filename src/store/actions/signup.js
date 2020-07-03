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

//exports3
export const signup = (signupData,showAlert) =>{
    const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';
    const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`

    return dispatch => {
        dispatch(signupStart())
        
        axios.post(endPoint, {...signupData,returnSecureToken: true})
            .then(response => {
                showAlert(true);
            })
            .catch(error => {
                dispatch(signupFail(error))
            })
    }
}