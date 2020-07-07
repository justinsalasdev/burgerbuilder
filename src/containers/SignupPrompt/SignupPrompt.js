import React from 'react';
import '../../recycle/Button/button.scss'
import './signup-prompt.scss';

const SignupPrompt = props => {
    const {acknowledgeAlert,endType} = props;

    const createEndMessage = (endType) => {
        switch(endType){
            case 'userNotSaved':
                return `We have created your account but failed to save your
                personal data due to some network error. Kindly login with your email
                and re-update them if needed. Cheers!`
            
            case 'signupFailed':
                return `Failed to create your account due to some error. Please try again`

            default: 
                return 'Your account was successfully created'
        }
    }

    const buttonText = (endType === 'signupFailed') ? 'OK' : 'Login'

    return (
        <div className='login-prompt'>
            <p className='login-prompt__toolkit'>{createEndMessage(endType)}</p>
            <button type="button" className='button--success signup-prompt__button' onClick={acknowledgeAlert}>{buttonText}</button>
        </div>
    )
}


export default SignupPrompt

