import React, {Component} from 'react';
import Wrapper from '../../containers/Wrapper/Wrapper';
import classes from './OrderSummary.module.css';
import Button from '../Button/Button';



class OrderSummary extends Component{

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>
                    {igKey}
                </span> : {this.props.ingredients[igKey]}
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
                <p className={classes.orderP}><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancelOrder}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.continueOrder}>Continue</Button>
            </Wrapper>
        )
    }
}







export default OrderSummary;