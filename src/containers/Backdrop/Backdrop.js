import React from 'react';
import './backdrop.scss';



const Backdrop = (props) => {
    const {show,clicked} = props;
    return (
        show ? <div className='backdrop' onClick={clicked}></div> : null
    )
}


export default Backdrop;