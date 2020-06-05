import React, {Component, Fragment} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/exports';

class Checkout extends Component {
    constructor(props){
        super(props)
        
        // this.state={
        //     ingredients: {},
        //     totalPrice: 0
        // }

        this.checkoutCancelledHandler = this.checkoutCancelledHandler.bind(this);
        this.checkoutContinuedHandler = this.checkoutContinuedHandler.bind(this);
    }

    // componentDidMount(){
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let entry of query.entries()){
    //         if(entry[0] ==='price'){
    //             price = entry[1];
    //         }else{
    //             ingredients[entry[0]] = +entry[1];
    //         }
    //     }

    //     this.setState({ingredients: ingredients, totalPrice: price});
    // }



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