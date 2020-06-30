import * as actions from './actions';
import axios from 'axios';

const loginStart = () => {
    return {
        type: actions.LOGIN_START
    }
}


const loginStore = (authData) => {
    return {
        type: actions.LOGIN_STORE,
        authData: authData
    }
}


const loginFail = (error) => {
    return {
        type: actions.LOGIN_FAIL,
        error: error.response.data.error
    }
}


const setLogoutTimer = (expiration) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        },expiration * 900)
    }
}


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
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
            
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))

            if (expirationDate <= new Date()){

                dispatch(logout());

            } else {
                const userId = localStorage.getItem('userId');
                const expiry = (expirationDate.getTime() - new Date().getTime())/1000;

                dispatch(loginStore({idToken: token, localId: userId}))
                dispatch(setLogoutTimer(expiry))
                }
            }
        }
    }

export const login = (authData) =>{
    return dispatch => {
        dispatch(loginStart())
        
        const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';
        const endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

        //endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
 
      
        axios.post(endPoint, {...authData,returnSecureToken: true})
            .then(response => {
                const expirationDate = new Date( new Date().getTime() + new Date(response.data.expiresIn*1000).getTime())
                localStorage.setItem('token',response.data.idToken)
                localStorage.setItem('expirationDate',expirationDate)
                localStorage.setItem('userId',response.data.localId)

                console.log(response.data);

                dispatch(setLogoutTimer(response.data.expiresIn))
                dispatch(loginStore(response.data))
            })
            .catch(error => {
                dispatch(loginFail(error))
            })
    }
}