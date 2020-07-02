import React from 'react';
import Modal from '../../recycle/Alert/Alert';
import useHttpErrorHandler from '../../hooks/useHttpErrorHandler'


const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
      const [error, confirmError] = useHttpErrorHandler(axios);
        return(
            <>
               {error?<Modal show={error !== null} closeModal={confirmError}>
                   {error.message}
               </Modal>:null}

               <WrappedComponent {...props}/>
           </>
            )
    }
}

export default withErrorHandler;