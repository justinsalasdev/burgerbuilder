import React from 'react';
import './alert.scss';
import Backdrop from '../../recycle/Backdrop/Backdrop';


const Alert = props => {

    const {closeAlert} = props;

    return(
        <>
            <Backdrop clicked={closeAlert}/>
            <div className='alert'>
                {props.children}
            </div>
        </>
    )
}


export default Alert;