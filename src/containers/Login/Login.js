import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports';
import '../../recycle/FormInput/form-input.scss';
import '../../recycle/Button/button.scss'
import '../../recycle/Form/form.scss'
import Spinner from '../../recycle/Spinner/Spinner';
import FormInput from '../../recycle/FormInput/FormInput';
import Alert from '../../recycle/Alert/Alert';
import useAlert from '../../hooks/useAlert';
import ErrorPrompt from '../../recycle/Prompt/Prompt';

import {useFormik} from 'formik';
import * as Yup from 'yup';

const Login = props => {

  const [alertShown,showAlert] = useAlert(false);  
  const dispatch = useDispatch();
  const loading = useSelector(state => state.login.loading);
  const conflictMessage = useSelector(state => state.login.conflictMessage);
  const errorMessage = useSelector(state => state.login.errorMessage);

  

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus()
  },[])

  const acknowledgeAlert = () => {
    showAlert(false)
  }
  
  const formik = useFormik ({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object ({
      email: Yup.string ()
        .email ('is invalid')
        .required ('is required')
        .max(64,'must not be longer than 20 characters'),
      password: Yup.string ()
        .required ('is required')
        .min (6, 'must be 6 characters atleast')
    }),

    onSubmit: loginData => {
      dispatch(actions.login(loginData,showAlert))
    }
  });
  
  const formToolkit = (
    (conflictMessage && <p className='form__error'>{conflictMessage.replace(/_/g,' ') + ' :('}</p>) || null
  )
  const submitDisabled = !Object.keys(formik.errors).length <= 0 

  return (
    <>
      <div className='form'>
      
        {formToolkit}

        {loading? (
          <div>
            <p style={{color:'wheat',marginBottom:'1rem'}}>Signing in...</p>
            <Spinner/>
          </div>
          
        ): 
        <form className='form__form' onSubmit={formik.handleSubmit}>
          <FormInput editing={true} formik={formik} identity='email' type="email" ref={inputRef}>Email</FormInput>
          <FormInput editing={true} formik={formik} identity='password' type="password">Password</FormInput>

          <button disabled={submitDisabled} type="submit" className="button--success form__submit">Submit</button>
        </form>}

        {loading? null: 
          <Link className='link--to' to='/signup'>Create account</Link>}
      </div>

      {!alertShown?null:
        <Alert closeAlert={acknowledgeAlert}>
            <ErrorPrompt acknowledgeAlert={acknowledgeAlert}>{errorMessage}</ErrorPrompt>
        </Alert>
      }
    </>


  );
};

export default Login;
