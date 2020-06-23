import * as actions from './actions';
import axios from '../../axios/auth'

const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}


const storeLoginData = (authData) => {
    return {
        type: actions.AUTH_SUCCESS,
        authData: authData
    }
}


const authFail = (error) => {
    return {
        type: actions.AUTH_FAIL,
        error: error
    }
}


const setLogoutTimer = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        },expirationTime * 900)
    }
}


//exports
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId')
    return {
        type: actions.AUTH_LOGOUT
    }
};


export const checkAuth = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
            
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))

            if (expirationDate <= new Date()){
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(storeLoginData({idToken: token, localId: userId}))
                const expiry = (expirationDate.getTime() - new Date().getTime())/1000;
                dispatch(setLogoutTimer(expiry))
                }
            }
        }
    }

export const login = authData =>{
    return dispatch => {
        dispatch(authStart())
        

        const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';
        const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
        // {
        //     // signUp : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        //     signIn : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
        // }
    
        axios.post(endPoint, {...authData,returnSecureToken: true})
            .then(response => {
                const expirationDate = new Date( new Date().getTime() + new Date(response.data.expiresIn*1000).getTime())
                localStorage.setItem('token',response.data.idToken)
                localStorage.setItem('expirationDate',expirationDate)
                localStorage.setItem('userId',response.data.localId)

                dispatch(setLogoutTimer(response.data.expiresIn))
                dispatch(storeLoginData(response.data))
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error))
            })
    }
}