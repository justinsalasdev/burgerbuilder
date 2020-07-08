import React from 'react';
import Alert from '../../recycle/Alert/Alert';
import useHttpErrorHandler from '../../hooks/useHttpErrorHandler'


const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        console.log(props);
      const [error, confirmError] = useHttpErrorHandler(axios);
        return(
            <>
               {error?<Alert closeAlert={confirmError}>
                   {error.message}
               </Alert>:null}

               <WrappedComponent {...props}/>
           </>
            )
    }
}

export default withErrorHandler;