import React from 'react';
import '../../recycle/Button/button.scss'
import './order-prompt.scss';

const OrderPrompt = props => {
    const {cancelOrder,goToLogin} = props;
    return (
        <div className='order-prompt'>
            <p className='order-prompt__toolkit'>Please login to continue</p>
            <button type="button" className='button--failed order-prompt__button' onClick={cancelOrder}>Cancel</button>
            <button type="button" className='button--success order-prompt__button' onClick={goToLogin}>Login</button>
        </div>
    )
}


export default OrderPrompt

