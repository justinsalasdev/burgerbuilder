import React, {Fragment} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/exports';



const Checkout = props => {
    const cancelCheckout = () => {
        props.history.replace('/');
    }

    const continueCheckout = () => {
        props.onCheckout()
        props.history.replace('/checkout/contact-data')
    }

    let summary = <Redirect to ="/"/>
        if(props.ings){
            summary  = <Fragment><CheckoutSummary 
                            ingredients={props.ings}
                            checkoutCancelled={cancelCheckout}
                            checkoutContinued={continueCheckout}
                        />
                        <Route 
                            path={props.match.path + '/contact-data'} 
                            component={ContactData}
                        /></Fragment>
        }
    
    return(
        <div>
            {summary}
        </div>
    )
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