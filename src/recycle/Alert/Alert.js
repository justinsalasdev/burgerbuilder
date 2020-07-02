import React from 'react';
import './alert.scss';
import Backdrop from '../../containers/Backdrop/Backdrop';


const Alert = props => {

    const {show,closeModal} = props;

    return(
        <>
            <Backdrop show={show} clicked={closeModal}/>
            <div className={show? 'alert--show': 'alert'}>
                {props.children}
            </div>
        </>
    )
}

function memoCondition(prevProps,nextProps){
    const result = (nextProps.show === prevProps.show ) && (nextProps.children === prevProps.children)
    return result
    
}

export default React.memo(Alert,memoCondition);