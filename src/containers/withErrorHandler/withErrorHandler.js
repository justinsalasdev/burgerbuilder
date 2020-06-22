import React from 'react';
import Modal from '../Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';
import useHttpErrorHandler from '../../hooks/httpErrorHandler'


const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
      const [error, confirmError] = useHttpErrorHandler(axios);
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