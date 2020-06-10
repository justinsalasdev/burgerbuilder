import * as actions from './actions';
import axios from '../../axios/auth'

const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}


const authSuccess = (authData) => {
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


const checkAuthTimeout = (expirationTime) => {
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
        console.log(token)
        if(!token){
            dispatch(logout());
            
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))

            if (expirationDate <= new Date()){
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess({idToken: token, localId: userId}))
                const expiry = (expirationDate.getTime() - new Date().getTime())/1000;
                console.log(expiry)
                dispatch(checkAuthTimeout(expiry))
                }
            }
        }
    }


export const auth = (email,password,isSignUp) =>{
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';

        const endPoints = {
            signUp : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
            signIn : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
        }
    
        axios.post((isSignUp? endPoints.signUp : endPoints.signIn), authData)
            .then(response => {
                console.log(response.data.expiresIn)
                const expirationDate = new Date( new Date().getTime() + new Date(response.data.expiresIn*1000).getTime())
                console.log(expirationDate)
                localStorage.setItem('token',response.data.idToken)
                localStorage.setItem('expirationDate',expirationDate)
                localStorage.setItem('userId',response.data.localId)

                dispatch(checkAuthTimeout(response.data.expiresIn))
                dispatch(authSuccess(response.data))
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error))
                console.log(error.response.data.error.message)
            })
    }
}