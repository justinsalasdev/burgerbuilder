import React, {Component, Fragment} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/exports';

class Checkout extends Component {
    constructor(props){
        super(props)
        
     
        this.checkoutCancelledHandler = this.checkoutCancelledHandler.bind(this);
        this.checkoutContinuedHandler = this.checkoutContinuedHandler.bind(this);
    }



    checkoutCancelledHandler(){
        this.props.history.replace('/');
    }

    checkoutContinuedHandler(){
        this.props.onCheckout()
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        let summary = <Redirect to ="/"/>
        if(this.props.ings){
            summary  = <Fragment><CheckoutSummary 
                            ingredients={this.props.ings}
                            checkoutCancelled={this.checkoutCancelledHandler}
                            checkoutContinued={this.checkoutContinuedHandler}
                        />
                        <Route 
                            path={this.props.match.path + '/contact-data'} 
                            component={ContactData}
                        /></Fragment>
                                    
                       
        }

        return(
            <div>
                {summary}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.buildBurger.ingredients,
        purchased: state.placeOrder.purchased
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        onCheckout: () => dispatch(actions.checkoutBurger())
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Checkout);