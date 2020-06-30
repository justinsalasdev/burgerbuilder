import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports';
import './auth.scss';
import '../../recycle/Button/button.scss'
import '../../recycle/FormInput/form-input.scss';
import Spinner from '../../recycle/Spinner/Spinner';
import FormInput from '../../recycle/FormInput/FormInput';

import {useFormik} from 'formik';
import * as Yup from 'yup';

const Auth = props => {
  const isLogin = props.match.path === '/login';

  const dispatch = useDispatch();
  const loading = useSelector(state => state.authenticate.loading);
  const error = useSelector(state => state.authenticate.error);

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
        .min (6, 'must be 6 characters atleast'),
      name: Yup.string ()
        .required ('is required'),
      address: Yup.string ()
        .required ('is required'),
    }),

    onSubmit: authData => {
      dispatch(actions.authenticate(authData,isLogin))
    }
  });
  
  const getFormToolkit = (loading,error) => {
    if(loading){
        if(isLogin){return <p className='auth__toolkit'>Logging you in...</p>}
        else{return <p className='auth__toolkit'>Creating your account...</p>}
    } else if(error){
        return <p className='auth__error'>{error.message.replace(/_/g,' ') + ' :('}</p>
    } else {
        if(isLogin){return <p className='auth__toolkit'>Please provide login details</p>}
        else{return <p className='auth__toolkit'>Please provide required info</p>}
    }
  }

  const generateInput = isLogin => {
    if(isLogin){
      return (
        <>
          <FormInput formik={formik} identity='email' type="email">Email</FormInput>
          <FormInput formik={formik} identity='password' type="password">Password</FormInput>
        </>
      )
    } else {
      return (
        <>
          <FormInput formik={formik} identity='name' type="text">Nickname</FormInput>
          <FormInput formik={formik} identity='address' type="text">Address</FormInput>
          <FormInput formik={formik} identity='email' type="email">Email </FormInput>
          <FormInput formik={formik} identity='password' type="password">Password</FormInput>
        </>
      )
    }

  }



  const formErrors = Object.keys(formik.errors).length;

  return (
    <div className='auth'>
      {getFormToolkit(loading,error)}
      {loading? <Spinner/>: <form className='auth__form' onSubmit={formik.handleSubmit}>

        {generateInput(isLogin)}

        <button disabled={!formErrors <= 0} type="submit" className="button--success auth__submit">Submit</button>
      </form>}

      {isLogin?<Link className='link--to' to="/signup">Create account</Link> : null}

    </div>
  );
};

export default Auth;
