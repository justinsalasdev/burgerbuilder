
import {useFormik} from 'formik';
import * as Yup from 'yup';

const useFormikSetter = (submitHnandler) => {
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
    
        onSubmit: formikData => {
          submitHnandler(formikData)
        }
      });

      return formik;
}
 
export default useFormikSetter;