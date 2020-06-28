import React, { useCallback } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports';
import './login.scss';
import '../../recycle/Button/button.scss'
import '../../recycle/FormInput/form-input.scss';
import Spinner from '../../recycle/Spinner/Spinner';
import FormInput from '../../recycle/FormInput/FormInput';
import useFormikSetter from '../../hooks/useFormikSetter';

const Login = props => {
  const dispatch = useDispatch();
  const submitHandler = useCallback((formikData) => dispatch(actions.login(formikData)),[dispatch]);
  const loading = useSelector(state => state.authenticate.loading);
  const error = useSelector(state => state.authenticate.error);

  const formik = useFormikSetter(submitHandler)
  
  const getFormToolkit = (loading,error) => {
    if(loading){
      return <p className='login__loading'>Logging you in...</p>
    } else if(error){
      return <p className='login__error'>{error.message.replace(/_/g,' ') + ' :('}</p>
    } else {
      return null;
    }
  }

  const formToolkit = getFormToolkit(loading,error);
  const formErrors = Object.keys(formik.errors).length;

  return (
    <div className='login'>
      {formToolkit}

      {loading? <Spinner/>: <form className='login__form' onSubmit={formik.handleSubmit}>

          <FormInput formik={formik} identity='email' type="email">Email Address</FormInput>
          <FormInput formik={formik} identity='password' type="password">Password</FormInput>

        <button disabled={!formErrors <= 0} type="submit" className="button--success login__submit">Submit</button>
        <Link className='link--to' to="/signup">Create account</Link>
      </form>}

    </div>
  );
};

export default Login;
