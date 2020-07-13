import React from 'react';
import '../../recycle/Button/button.scss';
import './build-controls.scss';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {
    const {
        startOrder,
        disabled,
        price,
        addIngredient,
        removeIngredient,
    } = props;

    const buttonStatus = {...disabled}
    const orderStatus = !(Object.keys(buttonStatus).map(statusKey=>{
        return (!buttonStatus[statusKey])
    }).reduce((overallStatus, currentButtonStatus)=>{
        return (overallStatus || currentButtonStatus)
    },false))

    return (
        <div className='build-controls'>
            <p className='build-controls__price'>Current price: <span>${price}</span></p>
            {controls.map(control => {
                return (
                <BuildControl 
                    key={control.label}
                    label={control.label}
                    addIngredient={() => addIngredient(control.type)}
                    removeIngredient={() => removeIngredient(control.type)}
                    disabled={disabled[control.type]}
                />
                )
            })}
            
            
            <button 
                className='button--success build-controls__order'
                disabled={orderStatus} 
                onClick={startOrder}>Order now!</button>

        </div>
    )
}


export default BuildControls;