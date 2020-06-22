import React, {Fragment} from 'react';
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../store/actions/exports';



const Checkout = props => {
        
    
    const dispatch = useDispatch();
    const onCheckout = () => dispatch(actions.checkoutBurger())
    const ings = useSelector(state => state.buildBurger.ingredients)


    const cancelCheckout = () => {
        props.history.replace('/');
    }

    const continueCheckout = () => {
        onCheckout()
        props.history.replace('/checkout/contact-data')
    }

    let summary = <Redirect to ="/"/>
        if(ings){
            summary  = <Fragment><CheckoutSummary 
                            ingredients={ings}
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

export default Checkout;