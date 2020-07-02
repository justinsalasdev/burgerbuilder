import React from 'react';
import '../../recycle/Button/button.scss'

const LoginPrompt = props => {
    const {
        isAuthenticated,
        continueOrder,
        loginHandler,
        cancelOrder
    } = props;

    const renderContinueButton = function(isAuthenticated, continueHandler, loginHandler){
        if(isAuthenticated){return <button className='button--success ordersummary__button' onClick={continueHandler}>Continue</button>}
        else{return <button className='button--success ordersummary__button' onClick={loginHandler}>Login</button>}
    }


    const createToolkit = function(isAuthenticated){
        if(isAuthenticated){return <p className='login-prompt__toolkit'></p>}
    }

    return (
        <div className='login-prompt'>
            { isAuthenticated ? null : <p className={"ordersummary__info"}>Please login in to continue</p>}
            <button type='button' className='button--failed ordersummary__button' onClick={cancelOrder}>Cancel</button>
            {renderContinueButton(isAuthenticated , continueOrder, loginHandler)}
        </div>
    )
}


export default LoginPrompt

