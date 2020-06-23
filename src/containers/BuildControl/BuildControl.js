import React from 'react';
import '../../recycle/Button/button.scss'
import './build-control.scss';

const control = (props) => {
    return(
        <div className ='build-control'>
            <div className='build-control__label'>{props.label}</div>
            <button 
                className='button--less build-control__button' 
                onClick={props.removed}
                disabled={props.disabled}
            >
            Less
            </button>

            <button 
                className='button--more build-control__button'
                onClick={props.added}
            >
            More
            </button>
        </div>
    )
}

export default control;