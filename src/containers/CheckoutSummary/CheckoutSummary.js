import React from 'react';
import Burger from '../Burger/Burger'; 
import Button from '../Button/Button';
import './checkout-summary.scss'

const checkoutSummary = (props) => {
    return (
        <div className={'checkout-summary'}>
            <h2>We hope it tastes well!</h2>
            <div style={{width: '30rem', height: '30rem', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}
                type="button"
                disabled={false}
                >Cancel</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}
                type="button"
                disabled={false}
                >Continue</Button>
        </div>
    )
}


export default checkoutSummary;