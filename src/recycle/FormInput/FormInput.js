import './form-input.scss';
import React from 'react';
        
const FormInput = React.forwardRef((props,ref) => {

    const{identity,
        type,
        formik,
        children,
        editing
    } = props;
    
    const getInputError = name =>{
        const isTouched = formik.touched[name];
        const inputError = formik.errors[name];
        return ( isTouched && inputError && <span className='form-input__toolkit'>{inputError}</span> ) || null;
      }

    return (
        <div className={editing? 'form-input': 'form-input--inactive'}>
            <label className='form-input__label' htmlFor={identity}>{children} {getInputError(identity)}</label>
            <input 
                disabled={!editing}
                ref={ref}
                type={type}
                className='form-input__field' 
                name={identity} {...formik.getFieldProps(identity)} 
            />
        </div>
    )
})
        
        
export default FormInput ;

        