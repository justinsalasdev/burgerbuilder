import React from 'react';
import '../../recycle/Button/button.scss'
import './login-prompt.scss';

const LoginPrompt = props => {
    const {cancelOrder,goToLogin} = props;
    return (
        <div className='login-prompt'>
            <p className='login-prompt__toolkit'>Please login to continue</p>
            <button type="button" className='button--failed login-prompt__button' onClick={cancelOrder}>Cancel</button>
            <button type="button" className='button--success login-prompt__button' onClick={goToLogin}>Login</button>

        </div>
    )
}


export default LoginPrompt

