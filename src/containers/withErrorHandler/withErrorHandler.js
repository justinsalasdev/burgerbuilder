import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';


const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null)

        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null)
            return req;
        })
        const resInterceptor = axios.interceptors.response.use(res => res, err => {
            setError(err)
        })

        useEffect(() => {
            //....
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            }
        },[reqInterceptor,resInterceptor]) 

        const confirmError = () => {
            setError(null)
        }

    

        return(
            <Wrapper>
               <Modal 
                    show={error}
                    modalClosed={confirmError}
               >
                   {error ? error.message : null}
               </Modal>
               <WrappedComponent {...props}/>
           </Wrapper>
            )

    }
}

export default withErrorHandler;