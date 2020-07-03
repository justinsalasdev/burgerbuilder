import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports';
import '../../recycle/Button/button.scss'
import '../../recycle/Form/form.scss'
import '../../recycle/FormInput/form-input.scss';
import Spinner from '../../recycle/Spinner/Spinner';
import FormInput from '../../recycle/FormInput/FormInput';
import Alert from '../../recycle/Alert/Alert';
import useAlert from '../../hooks/useAlert';
import SignupPrompt from '../SignupPrompt/SignupPrompt';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Signup = props => {

  const {history} = props;

  const dispatch = useDispatch();
  const [alertShown,showAlert] = useAlert(true);
  const loading = useSelector(state => state.signup.loading);
  const error = useSelector(state => state.signup.error);

  const goToCheckout = () => {
    history.replace('/checkout');
    showAlert(false);
  }

  const formik = useFormik ({
    initialValues: {
      nickname:'',
      address:'',
      email:'',
      password:''
    },
    validationSchema: Yup.object ({  
        email: Yup.string ()
            .email ('is invalid')
            .required ('is required'),
        password: Yup.string ()
            .required ('is required')
            .min (6, 'must be 6 characters atleast')
    }),

    onSubmit: (signupData) => {
      dispatch(actions.signup(signupData,showAlert))
    }
  });
  
  const getFormToolkit = (loading,error) => {
    if(loading){return <p className='form__toolkit'>Creating your account</p>}
    else if(error){return <p className='form__error'>{error.message.replace(/_/g,' ') + ' :('}</p>}
    else {return <p className='form__toolkit'>Please provide account info</p>}
  }


  const formErrors = Object.keys(formik.errors).length;


  return (
    <>
      <div className='form'>
        {getFormToolkit(loading,error)}
        {loading? <Spinner/>: <form className='form__form' onSubmit={formik.handleSubmit}>
          <FormInput formik={formik} identity='email' type="email">Email</FormInput>
          <FormInput formik={formik} identity='password' type="password">Password</FormInput>
          <button disabled={!formErrors <= 0} type="submit" className="button--success form__submit">Create</button>
        </form>}
      </div>

      {alertShown?<Alert closeAlert={goToCheckout} >
      <SignupPrompt goToCheckout={goToCheckout}/>
      </Alert>:null}
    </>
  );
};

export default Signup;
