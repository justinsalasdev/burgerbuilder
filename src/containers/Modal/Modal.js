import React from 'react';
import './modal.scss'
import Wrapper from '../Wrapper/Wrapper';
import Backdrop from '../Backdrop/Backdrop';


const Modal = props => {
    return(
        <Wrapper>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={props.show? 'modal modal--show': 'modal'}
            >
                {props.children}
            </div>
        </Wrapper>
    )
}



function memoCondition(prevProps,nextProps){
    const result = (nextProps.show === prevProps.show ) && (nextProps.children === prevProps.children)
    return result
    
}

export default React.memo(Modal,memoCondition);