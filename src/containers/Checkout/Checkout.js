import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../ContactData/ContactData';


class Checkout extends Component {
    constructor(props){
        super(props)
        
        this.state={
            ingredients: {},
            totalPrice: 0
        }

        this.checkoutCancelledHandler = this.checkoutCancelledHandler.bind(this);
        this.checkoutContinuedHandler = this.checkoutContinuedHandler.bind(this);
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let entry of query.entries()){
            if(entry[0] ==='price'){
                price = entry[1];
            }else{
                ingredients[entry[0]] = +entry[1];
            }
        }

        this.setState({ingredients: ingredients, totalPrice: price});
    }



    checkoutCancelledHandler(){
        this.props.history.replace('/');
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
                
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={() => {
                        return(
                            <ContactData 
                                ingredients={this.state.ingredients} 
                                price={this.state.totalPrice}/>
                        )
                    }}
                />

            </div>
        )
    }
}


export default Checkout;