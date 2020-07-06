import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports';
import '../../recycle/FormInput/form-input.scss';
import '../../recycle/Button/button.scss'
import '../../recycle/Form/form.scss'
import Spinner from '../../recycle/Spinner/Spinner';
import FormInput from '../../recycle/FormInput/FormInput';

import {useFormik} from 'formik';
import * as Yup from 'yup';

const Login = props => {


  const dispatch = useDispatch();
  const loginLoading = useSelector(state => state.login.loading);
  const error = useSelector(state => state.login.error);

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus()
  },[])
  


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
  
  const formToolkit = (
    (error && <p className='form__error'>{error.message.replace(/_/g,' ') + ' :('}</p>) || null
  )

  const submitDisabled = !Object.keys(formik.errors).length <= 0 

  return (
    <div className='form'>
    
      {formToolkit}

      {loginLoading? <Spinner/>: 
      <form className='form__form' onSubmit={formik.handleSubmit}>
        <FormInput formik={formik} identity='email' type="email" ref={inputRef}>Email</FormInput>
        <FormInput formik={formik} identity='password' type="password">Password</FormInput>

        <button disabled={submitDisabled} type="submit" className="button--success form__submit">Submit</button>
      </form>}

      {loginLoading? null: 
        <Link className='link--to' to='/signup'>Create account</Link>}
    </div>
  );
};

export default Login;
