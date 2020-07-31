import '../../recycle/Button/button.scss'
import '../../recycle/Form/form.scss'
import '../../recycle/FormInput/form-input.scss';

import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import * as actions from '../../store/actions/exports';
import Spinner from '../../recycle/Spinner/Spinner';
import FormInput from '../../recycle/FormInput/FormInput';
import Alert from '../../recycle/Alert/Alert';
import useAlert from '../../hooks/useAlert';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import ErrorPrompt from '../../recycle/Prompt/Prompt';

const profileSchema = Yup.object ({  
  name: Yup.string()
      .required('is required')
      .max(20,'must not be longer than 20 characters'),
  country: Yup.string()
      .required('is required')
      .max(20,'must not be longer than 20 characters'),
  zipCode: Yup.string()
      .required('is required')
      .matches(/^[0-9]+$/,'must be a number')
      .min(4,'must be 4 characters at least')
      .max(4,'should not be more than 4 digits'),
  contactNumber: Yup.string()
      .required('is required')
      .matches(/^[0-9]+$/,'must be a number')
      .max(20,'must not be longer than 20 digits')
})



const Profile = props => {

  const userData = useSelector(state => state.login.userData)
  const {contactNumber,country,name,userId,zipCode,id} = userData;
  const loading = useSelector(state => state.updateProfile.loading);
  const errorMessage = useSelector(state => state.updateProfile.errorMessage);
  const idToken = useSelector(state => state.login.idToken);

  const dispatch = useDispatch();

  const [alertShown,showAlert] = useAlert(false);

  const {history} = props;

  useEffect(() => {
    dispatch(actions.startEdit())
    return () => {
      dispatch(actions.endEdit())
    }

  // eslint-disable-next-line
  },[])



  const goToProfile = () => {
    history.replace('/profile')
  }

  const acknowledgeAlert = () => {
      showAlert(false);
  }

  const formik = useFormik ({
    initialValues: {
      name:name,
      country:country,
      zipCode: zipCode,
      contactNumber: contactNumber
    },
    validationSchema: profileSchema,
    onSubmit: (formData) => {
      dispatch(actions.updateProfile(formData,id,userId,idToken,showAlert,history))
    }
  });
  
  useEffect(() => {
    setTimeout(() => {
      
    },500)
  })


  const formHasErrors = Object.keys(formik.errors).length > 0;
  const valuesChanged = JSON.stringify(formik.initialValues) !== JSON.stringify(formik.values)
  const saveText = (  valuesChanged && 'Save') || 'No changes'


  return (
    <>
      <div className='form'>
        {loading? (
          <div>
            <p style={{color:'wheat',marginBottom:'1rem'}}>Saving changes...</p>
            <Spinner/>
          </div>
        )
          :<form className='form__form' onSubmit={formik.handleSubmit}>

              <FormInput formik={formik} identity='name' type="text">Name</FormInput>
              <FormInput formik={formik} identity='country' type="text">Country</FormInput>
              <FormInput formik={formik} identity='zipCode' type="text">Zip Code</FormInput>
              <FormInput formik={formik} identity='contactNumber' type="text">Contact Number</FormInput>

              <button type="button" className="button--more form__cancel" onClick={goToProfile}>Cancel</button>
              <button disabled={(!valuesChanged || formHasErrors)} type="submit" className="button--success form__submit">{saveText}</button>
          </form>}
       </div>
      

      {!alertShown? null :
      <Alert closeAlert={acknowledgeAlert} >
        <ErrorPrompt acknowledgeAlert={acknowledgeAlert}>{errorMessage}</ErrorPrompt>
      </Alert>}
    </>
  );
};

export default Profile;
