import * as actions from './actions';
import {storeUserData} from './login';
import axios from 'axios';


export const startEdit = () => {
    return {
        type: actions.PROFILE_EDIT_START
    }
    
}

const startSavingProfile = () => {
    return {
        type: actions.PROFILE_SAVE_START
    }
}

const endSavingProfile = () => {
    return {
        type: actions.PROFILE_SAVE_END
    }
}

export const handleSaveFail = (errorMessage) => {
    return {
        type: actions.PROFILE_SAVE_FAILED,
        errorMessage
    }
}


export const endEdit = () => {
    return {
        type: actions.PROFILE_EDIT_END
    }
    
}


export const updateProfile = (formData,id,userId,idToken,showAlert,history) => {
    
    const config = {
        method: 'post',
        headers:{
            'X-HTTP-Method-Override':'PATCH'
        },
        params: {
            auth: idToken,

        }
    }
    const endPoint = `https://react-burger-builder-12ae6.firebaseio.com/users/${id}.json`;

    return dispatch => {
        dispatch(startSavingProfile())
        axios.post(endPoint,formData,config)
            .then(
                response => {
                    const updatedUserData = {...response.data,userId:userId,id:id}
                    localStorage.setItem('userData', JSON.stringify(updatedUserData))
                    dispatch(storeUserData(response.data))
                    dispatch(endSavingProfile())
                    history.replace('/profile')
                },
                () => {
                    dispatch(handleSaveFail('Failed to save changes'))
                    showAlert(true);
                }
            )
            .catch(() => {
                dispatch(handleSaveFail('Failed to save changes'))
                    showAlert(true);
            })
    }
}

    

       