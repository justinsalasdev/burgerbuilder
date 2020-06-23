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

const buildControls = (props) => {

    const buttonStatus = {...props.disabled}
    const orderStatus = !(Object.keys(buttonStatus).map(statusKey=>{
        return (!buttonStatus[statusKey])
    }).reduce((overallStatus, currentButtonStatus)=>{
        return (overallStatus || currentButtonStatus)
    },false))

    return (
        <div className='build-controls'>
            <p className='build-controls__price'>Current price: <span>${props.price.toFixed(2)}</span></p>
            {controls.map(control => {
                return (
                <BuildControl 
                    key={control.label}
                    label={control.label}
                    added={()=>props.ingredientAdded(control.type)}
                    removed={()=>props.ingredientRemoved(control.type)}
                    disabled={props.disabled[control.type]}
                />
                )
            })}
            
            
            <button 
                className='button--success build-controls__order'
                disabled={orderStatus} 
                onClick={props.ordered}>Order now!</button>

        </div>
    )
}


export default buildControls;