import React from 'react';
import './prompt.scss'

const Prompt = props => {
    const {children,acknowledgeAlert} = props 
    return (
        <div className='error-prompt'>
            <p className='error-prompt__toolkit'>{children}</p>
            <button type="button" className='button--success error-prompt__button' onClick={acknowledgeAlert}>OK</button>
        </div>
    )
}
export default Prompt;

