import * as actions from './actions';
import axios from 'axios';


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

var logoutTimer;
const setLogoutTimer = (expiration) => {
    return dispatch => {
        logoutTimer = setTimeout(() => {
            dispatch(logout('auto'))
        },expiration*1000)
    } 
}

export const getUserData = (idToken, userId) => {
    const queryParams = `?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`
    const endPoint = `https://react-burger-builder-12ae6.firebaseio.com/users.json${queryParams}`
    return axios.get(endPoint)
}

export const storeUserData = (userData) => {
    return {
        type: actions.PROFILE_STORE,
        userData
    }
}


const handleLoginFailure = (errorMessage) => {
    return {
        type: actions.PROFILE_FAIL,
        errorMessage
    }
}

const handleLoginConflict = (conflictMessage) => {
    return {
        type: actions.LOGIN_FAIL,
        conflictMessage
    }
}

const handleTimerExpiration = () => {
    return {
        type: actions.LOGIN_EXPIRED
    }
}

export const acknowledgeTimerExpiration = () => {
    return {
        type: actions.LOGIN_EXPIRED_ACK
    }
}


//--------------------------------------------------------------------------------------

//exports
export const logout = (method) => {
    clearTimeout(logoutTimer)
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId')
    localStorage.removeItem('userData')
    return {
        type: actions.LOGOUT,
        method
    }
};


export const  refreshAuth = (localToken) => {
    return dispatch => {
        if(!localToken){
            return
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()){

                dispatch(logout('auto'));
                
                

            } else {
                const userId = localStorage.getItem('userId');
                const userData = JSON.parse(localStorage.getItem('userData'))
                const expiry = (expirationDate.getTime() - new Date().getTime())/1000;

                dispatch(storeUserData(userData))
                dispatch(storeLoginData(localToken,userId))
                dispatch(setLogoutTimer(expiry))
                dispatch(handleTimerExpiration())

                
                }
            }
        }
    }

export const login = (loginData,showAlert) =>{
    let userId = null;
    let idToken = null;
    let expiry = null;

    return dispatch => {
        dispatch(startLogin())
        
        const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';
        const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

        axios.post(endPoint, {...loginData,returnSecureToken: true})
            .then( //user is authenticated but defer saving of credentials until userData is retrieved
                response => {

                    userId = response.data.localId
                    idToken = response.data.idToken
                    expiry = response.data.expiresIn
                   
                    getUserData(idToken,userId)
                        .then( //userData is retrieved --> may not save login credentials
                            response => {

                                const expirationDate = new Date( new Date().getTime() + new Date(expiry*1000).getTime())

                                localStorage.setItem('token',idToken)
                                localStorage.setItem('expirationDate',expirationDate)
                                localStorage.setItem('userId',userId)

                                const userData = {};
                                for (const id in response.data){
                                    Object.assign(userData,{...response.data[id], id:id})
                                }
                                localStorage.setItem('userData',JSON.stringify(userData))
                                dispatch(storeLoginData(idToken,userId))
                                dispatch(setLogoutTimer(expiry))
                                dispatch(storeUserData(userData))

                            },
                            () => {
                                dispatch(handleLoginFailure("Failed to login due to some errors :("))
                                showAlert(true)
                            }
                        )
                },
                error => {
                    const conflictMessage = error.response.data.error.message
                    dispatch(handleLoginConflict(conflictMessage))
                }) 
                .catch(() => {
                    dispatch(handleLoginFailure("Network Error! Failed to login :("))
                    showAlert(true)
                })
    }
}