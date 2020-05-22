import React from 'react';
import Wrapper from '../../containers/Wrapper/Wrapper';
import classes from './OrderSummary.module.css';
import Button from '../Button/Button';


const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>
                    {igKey}
                </span> : {props.ingredients[igKey]}
            </li>
            )
        })

    return(
        <Wrapper>
            <h3 className={classes.modalHeading}>Your Order</h3>
            <p>A delicious burger with the following ingredients :</p>
            <ul className={classes.orderList}>
                {ingredientSummary}
            </ul>
            <p className={classes.orderP}><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.cancelOrder}>Cancel</Button>
            <Button btnType="Success" clicked={props.continueOrder}>Continue</Button>
        </Wrapper>
    )
}



export default orderSummary;