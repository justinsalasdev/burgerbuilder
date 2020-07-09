import * as actions from './actions';
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

const handleSaveFail = (errorMessage) => {
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


export const updateProfile = (userData,id,idToken) => {

    // const updateObject = {
    //     [id]:{
    //         ...userData
    //     }
    // }

    const updateObject = '{-MBnu-SHLYrk4j7TnZmL:{"name":"hahaha"}}'

    const queryParams = `auth=${idToken}&http-method-override=PUT`
    const endPoint = `https://react-burger-builder-12ae6.firebaseio.com/users.json?${queryParams}`


    return dispatch => {
        dispatch(startSavingProfile())
        axios.post(endPoint,updateObject)
            .then(
                response => {
                    console.log(response)
                    dispatch(endSavingProfile())
                },
                error => dispatch(handleSaveFail('error1'))
            )
            .catch(
                error => dispatch(handleSaveFail('error2'))
            )
    }
}

    

       