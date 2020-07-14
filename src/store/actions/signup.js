import * as actions from './actions';
import axios from 'axios';



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

const handleSignupConflict = (conflictMessage) => {
    return {
        type: actions.SIGNUP_CONFLICT,
        conflictMessage
    }
}

const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';
const postUserData = (userData, idToken) => {
    const queryParams = `?auth=${idToken}`
    return axios.post(`https://react-burger-builder-12ae6.firebaseio.com/users.json${queryParams}`, userData)
}

const postSignupData = (signUpData) => {
    const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
    return axios.post(endPoint, { ...signUpData, returnSecureToken: true })
}

const deleteSignupData = (idToken) => {
    const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${apiKey}`
    return axios.post(endPoint, { idToken })
}

//exports
export const signup = (formData, showAlert) => {
    const {
        email,
        password,
        name,
        country,
        zipCode,
        contactNumber,
    } = formData

    let token = null;
    const signUpData = { email, password };
    const userData = { name, country, zipCode, contactNumber };

    return dispatch => {

        dispatch(startSignup())

        postSignupData(signUpData)
            .then(
                response => {
                    const idToken = response.data.idToken;
                    const userId = response.data.localId;
                    token = idToken;

                    postUserData({ ...userData, userId }, idToken)
                        .then(
                            () => { dispatch(endSignup('userSaved')); showAlert(true); },
                            error => {
                                deleteSignupData(token)
                                    .then(
                                        () => {
                                            dispatch(endSignup('signupFailed'));
                                            showAlert(true)
                                        },
                                        () => {
                                            dispatch(endSignup('userNotSaved'));
                                            showAlert(true)
                                        }
                                    )
                            }
                        )
                },
                error => {
                    const conflictMessage = error.response.data.error.message
                    dispatch(handleSignupConflict(conflictMessage))
                }
            )
            .catch(() => {
                dispatch(endSignup('signupFailed'))
                showAlert(true)
            })
    }
}



