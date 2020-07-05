import React from 'react';
import './backdrop.scss';



const Backdrop = (props) => {
    const {clicked} = props;
    return (
        <div className='backdrop' onClick={clicked}></div>
    )
}


export default Backdrop;