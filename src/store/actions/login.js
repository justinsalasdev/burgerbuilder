import * as actions from './actions';
import axios from 'axios';
import database from '../../axios/database';


//-------------------------------------------------------
const startLogin = () => {
    return {
        type: actions.LOGIN_START
    }
}

const storeLoginData = (idToken,userId) => {
    return {
        type: actions.LOGIN_STORE,
        idToken,
        userId
    }
}

const setLogoutTimer = (expiration) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        },expiration * 900)
    }
}

const getUserData = (idToken, userId) => {
    const queryParams = `?auth=${idToken}2&orderBy="userId"&equalTo="${userId}"`
    return database.get(`/users.json${queryParams}`)
}

const storeUserData = (userData) => {
    return {
        type: actions.PROFILE_STORE,
        userData
    }
}

const handleRetrieveFailure = (error) => {
    return {
        type: actions.PROFILE_FAIL,
        error
    }
}


const handleLoginFailure = (error) => {
    return {
        type: actions.LOGIN_FAIL,
        error
    }
}


//--------------------------------------------------------------------------------------

//exports
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId')
    return {
        type: actions.LOGOUT
    }
};


export const checkAuth = () => {
    return dispatch => {
        const idToken = localStorage.getItem('token');
        if(!idToken){
            dispatch(logout());
            
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))

            if (expirationDate <= new Date()){

                dispatch(logout());

            } else {
                const userId = localStorage.getItem('userId');
                const expiry = (expirationDate.getTime() - new Date().getTime())/1000;

                dispatch(storeLoginData(idToken,userId))
                dispatch(setLogoutTimer(expiry))
                }
            }
        }
    }




export const login = (loginData,showAlert) =>{
    return dispatch => {
        dispatch(startLogin())
        
        const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';
        const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

        axios.post(endPoint, {...loginData,returnSecureToken: true})
            .then(
                response => {
                    const expirationDate = new Date( new Date().getTime() + new Date(response.data.expiresIn*1000).getTime())

                    const userId = response.data.localId
                    const idToken = response.data.idToken
                    const expiry = response.data.expiresIn
        
                    localStorage.setItem('token',idToken)
                    localStorage.setItem('expirationDate',expirationDate)
                    localStorage.setItem('userId',userId)

                    dispatch(storeLoginData(idToken,userId))
                    dispatch(setLogoutTimer(expiry))

                    getUserData(idToken,userId)
                        .then(
                            response => {
                                const userData = {};
                                for (const id in response.data){
                                    Object.assign(userData,response.data[id])
                                }
                                dispatch(storeUserData(userData))
                            })
                            .catch(() => {
                                const customError = {
                                    message: 'Network Error! Failed to login'
                                }
                                dispatch(handleRetrieveFailure(customError))
                                showAlert(true)
                            })
                },
                error => {
                    console.log('error handler2')
                    dispatch(handleLoginFailure(error.response.data.error))
                })  
    }
}