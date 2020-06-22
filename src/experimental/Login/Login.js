import React from 'react';
import './login.scss';
import '../../recycle/Button/button.scss'
import '../../recycle/FormInput/form-input.scss';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Login = props => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik ({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object ({
      email: Yup.string ()
        .email ('is invalid')
        .required ('is required'),
      password: Yup.string ()
        .required ('is required')
        .min (6, 'must be 6 characters atleast')
    }),

    onSubmit: values => {
      alert (JSON.stringify (values, null, 2));
    },
  });

  function errorMessage(name){
    if(formik.touched[name] && formik.errors[name]){
      return <span className='form-input__toolkit'>{formik.errors[name]}</span>
    } else {
      return null
    }
  }

  const formErrors = Object.keys(formik.errors).length;

  return (
    <div className='login'>
      <form className='login__form' onSubmit={formik.handleSubmit}>

          <div className='form-input'>
            <label className='form-input__label' htmlFor="email">Email Address {errorMessage('email')}</label>
            <input className='form-input__field' name="email" {...formik.getFieldProps ('email')} />
          </div>

          <div className='form-input'>
            <label className='form-input__label' htmlFor="email">Password {errorMessage('password')}</label>
            <input className='form-input__field' name="password" type="password" {...formik.getFieldProps ('password')} />
          </div>
         
        <button disabled={!formErrors <= 0} type="submit" className="button--success login__submit">Submit</button>

      </form>
    </div>
  );
};

export default Login;
