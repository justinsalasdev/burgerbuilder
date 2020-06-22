import React from 'react';
import './input.scss';

const input = (props) => {

    let inputElement = null;
    const inputField = (!props.valid && props.touched)? 'input__field input__field--invalid' : 'input__field';

    switch(props.elementType){
        case('input'):
            inputElement = <input 
                            className={inputField} 
                            {...props.elementConfig}
                            name={props.name}
                            value={props.value}
                            onChange={props.changed} />
                            
            break;

        case('email'):
        inputElement = <input 
                        className={inputField} 
                        {...props.elementConfig}
                        name={props.name}
                        value={props.value}
                        onChange={props.changed} />
                        
        break;

        case('password'):
        inputElement = <input 
                        className={inputField} 
                        {...props.elementConfig}
                        name={props.name}
                        value={props.value}
                        onChange={props.changed} />
                        
        break;
        
        case('textarea'):
            inputElement = <textarea 
                            className={inputField} 
                            {...props.elementConfig}
                            name={props.name}
                            value={props.value} 
                            onChange={props.changed}/>
            break;


        case('select'):
        inputElement = <select
                            className={inputField} 
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
                            className={inputField} 
                            {...props.elementConfig}
                            name={props.name}
                            value={props.value}
                            onChange={props.changed} />

    }

    return (
        <div className={'input'}>
            {/* <label className={classes.Label}>{props.label}</label> */}
            {inputElement}
        </div>
    )
}


export default input;