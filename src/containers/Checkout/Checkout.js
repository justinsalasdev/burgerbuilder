import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';


class Checkout extends Component {
    constructor(props){
        super(props)
        
        this.state={
            ingredients: {
                salad: 1,
                meat: 1,
                cheese: 1,
                bacon: 1,
            }
        }

        this.checkoutCancelledHandler = this.checkoutCancelledHandler.bind(this);
        this.checkoutContinuedHandler = this.checkoutContinuedHandler.bind(this);
    }


    checkoutCancelledHandler(){
        this.props.history.goBack();
    }

    checkoutContinuedHandler(){
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    />
            </div>
        )
    }
}


export default Checkout;