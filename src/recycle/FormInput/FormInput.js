import './form-input.scss';
import React from 'react';
        

        
        
const FormInput = props => {

    const{identity,
        formik,
        children,
    } = props;
    
    const getInputError = name =>{
        if(formik.touched[name] && formik.errors[name]){
          return {errorMessage: <span className='form-input__toolkit'>{formik.errors[name]}</span>, errorClass: ' form-input__field--invalid'}
        } else {
          return {errorMessage: null, errorClass:''}
        }
      }

    return (
        <div className='form-input'>
            <label className='form-input__label' htmlFor={identity}>{children} {getInputError(identity).errorMessage}</label>
            <input 
                type={identity}
                className={`form-input__field${getInputError(identity).errorClass}`} 
                name={identity} {...formik.getFieldProps(identity)} 
            />
        </div>
    )
}
        
        
export default FormInput ;

        