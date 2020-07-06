import * as actions from './actions';
import axios from 'axios';
import database from '../../axios/database';



const startSignup = () => {
    return {
        type: actions.SIGNUP_START
    }
    
}
const endSignup = (endType) => {
    return {
        type: actions.SIGNUP_END,
        endType
    }
}
 
const handleSignupConflict = (error) => {
    return {
        type: actions.SIGNUP_CONFLICT,
        error
    }
}

const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';
const postUserData = (userData,idToken) => {
    const queryParams = `?auth=${idToken}`
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

                    postUserData({...userData, userId},idToken)
                        .then(
                            () => {dispatch(endSignup('userSaved'));showAlert(true);},
                            error => {
                                console.log(error.response.data.error)
                                deleteSignupData(token)
                                    .then(
                                        () => {dispatch(endSignup('signupFailed')); showAlert(true)},
                                        () => {dispatch(endSignup('userNotSaved')); showAlert(true)}
                                    )
                            }   
                        )
                },
                error => {dispatch(handleSignupConflict(error.response.data.error))}
            )
    }
}

    

       