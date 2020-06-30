import * as actions from './actions';
import axios_auth from '../../axios/auth'

const authStart = () => {
    return {
        type: actions.AUTH_START
    }
}


const authStore = (response) => {
    return {
        type: actions.AUTH_STORE,
        authData: response.data
    }
}


const authFail = (error) => {
    return {
        type: actions.AUTH_FAIL,
        error: error.response.data.error
    }
}


const setLogoutTimer = (response) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        },response.data.expiresIn * 900)
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
                const expiry = (expirationDate.getTime() - new Date().getTime())/1000;

                dispatch(authStore({idToken: token, localId: userId}))
                dispatch(setLogoutTimer(expiry))
                }
            }
        }
    }

export const authenticate = (authData,isLogin) =>{
    return dispatch => {
        dispatch(authStart())
        
        const apiKey = 'AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE';

        function getEndPoint(isLogin){
            let endPoint = '';
            if(isLogin){
                endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
            } else {
                endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
            }
            return endPoint;
        }

        const endPoint = getEndPoint(isLogin);
      
        axios_auth.post(endPoint, {...authData,returnSecureToken: true})
            .then(response => {
                const expirationDate = new Date( new Date().getTime() + new Date(response.data.expiresIn*1000).getTime())
                localStorage.setItem('token',response.data.idToken)
                localStorage.setItem('expirationDate',expirationDate)
                localStorage.setItem('userId',response.data.localId)

                dispatch(setLogoutTimer(response))
                dispatch(authStore(response))
            })
            .catch(error => {
                dispatch(authFail(error))
            })
    }
}