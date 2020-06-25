import React from 'react';
import Modal from '../../recycle/Modal/Modal';
import useHttpErrorHandler from '../../hooks/useHttpErrorHandler'


const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
      const [error, confirmError] = useHttpErrorHandler(axios);
        return(
            <>
               <Modal 
                    show={error}
                    modalClosed={confirmError}
               >
                   {error ? error.message : null}
               </Modal>
               <WrappedComponent {...props}/>
           </>
            )
    }
}

export default withErrorHandler;