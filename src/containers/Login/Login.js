import React from 'react';
import './login.scss';
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
        .email ('Invalid email address')
        .required ('Required'),
      password: Yup.string ()
        .required ('No password provided.')
        .min (8, 'Password is too short - should be 8 chars minimum.')
    }),

    onSubmit: values => {
      alert (JSON.stringify (values, null, 2));
    },
  });

  console.log(formik.errors)

  return (
    <div className='login'>
      <form className='login__form' onSubmit={formik.handleSubmit}>

       
          <label className='login__label' htmlFor="email">Email Address</label>
          <div className='login__box'>
            <input className='login__field' name="email" {...formik.getFieldProps ('email')} />
            {formik.touched.email && formik.errors.email
            ? <span className='login__error'>{formik.errors.email}</span>
            : null}
          </div>
         
        
          <label className='login__label' htmlFor="password">Password</label>
          <div className='login__box'>
            <input className='login__field' name="password" type='password'{...formik.getFieldProps ('password')} />
            {formik.touched.password && formik.errors.password
            ? <span className='login__error'>{formik.errors.password}</span>
            : null}
          </div>
          
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default Login;
