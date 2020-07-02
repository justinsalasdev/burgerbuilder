import React from 'react';
import '../../recycle/Button/button.scss'
import './build-control.scss';

const control = (props) => {

    const {label,removeIngredient,disabled,addIngredient} = props;
    return(
        <div className ='build-control'>
            <div className='build-control__label'>{label}</div>
            <button 
                className='button--less build-control__button' 
                onClick={removeIngredient}
                disabled={disabled}
            >
            Less
            </button>

            <button 
                className='button--more build-control__button'
                onClick={addIngredient}
            >
            More
            </button>
        </div>
    )
}

export default control;