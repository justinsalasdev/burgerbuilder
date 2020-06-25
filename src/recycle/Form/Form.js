import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports';
import './login.scss';
import '../../recycle/Button/button.scss'
import '../../recycle/FormInput/form-input.scss';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Spinner from '../../recycle/Spinner/Spinner';

const Login = props => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.authenticate.loading);
  const error = useSelector(state => state.authenticate.error);
  // const isAuthenticated = useSelector(state => state.authenticate.token !== null);
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

    onSubmit: loginData => {
      dispatch(actions.login(loginData))
    }
  });

  const inputError = name =>{
    if(formik.touched[name] && formik.errors[name]){
      return {errorMessage: <span className='form-input__toolkit'>{formik.errors[name]}</span>, errorClass: ' form-input__field--invalid'}
    } else {
      return {errorMessage: null, errorClass:''}
    }
  }

  const formToolkit = (loading,error) => {
    if(loading){
      return <p className='login__loading'>Logging you in...</p>
    } else if(error){
      return <p className='login__error'>{error.message.replace(/_/g,' ') + ' :('}</p>
    } else {
      return null;
    }
  }
     
  const formErrors = Object.keys(formik.errors).length;

  return (
    <div className='login'>

      {formToolkit(loading,error)}

      {loading? <Spinner/>: <form className='login__form' onSubmit={formik.handleSubmit}>
        
          <div className='form-input'>
            <label className='form-input__label' htmlFor="email">Email Address {inputError('email').errorMessage}</label>
            <input 
              className={`form-input__field${inputError('email').errorClass}`} 
              name="email" {...formik.getFieldProps ('email')} 
            />
          </div>

          <div className='form-input'>
            <label className='form-input__label' htmlFor="email">Password {inputError('password').errorMessage}</label>
            <input 
              className={`form-input__field${inputError('password').errorClass}`} 
              name="password" type="password" {...formik.getFieldProps ('password')} 
            />
          </div>
         
        <button disabled={!formErrors <= 0} type="submit" className="button--success login__submit">Submit</button>
        <Link className='link--to' to="/signup">Create account</Link>
      </form>}

    </div>
  );
};

export default Login;
