import * as actions from './actions';
import axios from 'axios';
import database from '../../axios/database';

const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';

const startSignup = () => {
    return {
        type: actions.SIGNUP_START
    }
    
}
const completeSignup = () => {
    return {
        type: actions.SIGNUP_COMPLETE
    }
}
 
const handleSignupFailure = (error) => {
    return {
        type: actions.SIGNUP_FAIL,
        error
    }
}

const postUserData = (userData,idToken) => {
    const queryParams = `?auth=${idToken}2`
    return database.post(`/users.json${queryParams}`, userData)
}

const postSignupData = (signUpData) => {
    const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
    return axios.post(endPoint, {...signUpData, returnSecureToken: true})
}
    
const deleteSignupData = (idToken) => {
    const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${apiKey}`
    return axios.post(endPoint, {idToken})
}

//exports
export const signup = (formData,showAlert) => {
    const {
        email,
        password,
        name,
        country,
        zipCode,
        contactNumber,
    } = formData

    let token = null;
    const signUpData = {email,password};
    const userData = {name,country,zipCode,contactNumber};
     
    return dispatch => {

        dispatch(startSignup())
        
        postSignupData(signUpData)
            .then(
                response => {
                    console.log(response)
                    const idToken = response.data.idToken;
                    const userId = response.data.localId;
                    token = idToken;
                    return postUserData({...userData, userId},idToken)
                },
                error => dispatch(handleSignupFailure(error.response.data.error))
            )
            .then(
                response => {
                    console.log(response)
                    showAlert(true);
                    dispatch(completeSignup());
                },
                error => {
                    console.log(error.response.data.error)
                    return deleteSignupData(token)
                }
            )
            .then(
                response => console.log(response),
                error => console.log(error)
            )
    }
}

    

       