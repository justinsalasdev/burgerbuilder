import React from 'react';
import './modal.scss'
import Backdrop from '../../containers/Backdrop/Backdrop';


const Modal = props => {
    return(
        <>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={props.show? 'modal modal--show': 'modal'}
            >
                {props.children}
            </div>
        </>
    )
}

function memoCondition(prevProps,nextProps){
    const result = (nextProps.show === prevProps.show ) && (nextProps.children === prevProps.children)
    return result
    
}

export default React.memo(Modal,memoCondition);