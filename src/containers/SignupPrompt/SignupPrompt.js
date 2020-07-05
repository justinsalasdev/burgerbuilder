import React from 'react';
import '../../recycle/Button/button.scss'
import './signup-prompt.scss';

const SignupPrompt = props => {
    const {goToCheckout} = props;
    return (
        <div className='login-prompt'>
            <p className='login-prompt__toolkit'>You account was successfully created</p>
            <button type="button" className='button--success signup-prompt__button' onClick={goToCheckout}>Login</button>

        </div>
    )
}


export default SignupPrompt

