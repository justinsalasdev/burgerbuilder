import React from 'react';



const LoginPrompt = props => {
    const {children,acknowledgeAlert} = props 
    return (
        <div className='login-prompt'>
            <p className='login-prompt__toolkit'>{children}</p>
            <button type="button" className='button--success signup-prompt__button' onClick={acknowledgeAlert}>OK</button>
        </div>
    )
}
export default LoginPrompt;

