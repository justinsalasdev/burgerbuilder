import React from 'react';
import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(!props.valid && props.touched){
        inputClasses.push(classes.Invalid)
    }

    switch(props.elementType){
        case('input'):
            inputElement = <input 
                            className={inputClasses.join(' ')} 
                            {...props.elementConfig}
                            name={props.name}
                            value={props.value}
                            onChange={props.changed} />
                            
            break;

        case('email'):
        inputElement = <input 
                        className={inputClasses.join(' ')} 
                        {...props.elementConfig}
                        name={props.name}
                        value={props.value}
                        onChange={props.changed} />
                        
        break;

        case('password'):
        inputElement = <input 
                        className={inputClasses.join(' ')} 
                        {...props.elementConfig}
                        name={props.name}
                        value={props.value}
                        onChange={props.changed} />
                        
        break;
        
        case('textarea'):
            inputElement = <textarea 
                            className={inputClasses.join(' ')} 
                            {...props.elementConfig}
                            name={props.name}
                            value={props.value} 
                            onChange={props.changed}/>
            break;


        case('select'):
        inputElement = <select
                            className={inputClasses.join(' ')} 
                            name={props.name}
                            value={props.value}
                            onChange={props.changed}>
                            {props.elementConfig.options.map(option => {
                                return(
                                    <option key={option.value} value={option.value}>
                                        {option.displayValue}
                                    </option>
                                )
                                
                            })}
                       </select>
            break;


        default:
            inputElement = <input 
                            className={inputClasses.join(' ')} 
                            {...props.elementConfig}
                            name={props.name}
                            value={props.value}
                            onChange={props.changed} />

    }

    return (
        <div className={classes.Input}>
            {/* <label className={classes.Label}>{props.label}</label> */}
            {inputElement}
        </div>
    )
}


export default input;