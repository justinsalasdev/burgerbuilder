import React, {useEffect} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import axios from '../../axios/orders';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/exports';

const BurgerBuilder = props => {

    useEffect(() => {
        props.onInitIngredients()
    // eslint-disable-next-line
    },[])

    const handlePurchase = () => {props.onInitOrder()}
    const handleCancelPurchase = () => {props.onCanceledOrder()}
    const handleContinuePurchase = () => {
        props.onCanceledOrder(); //sets order status to false
        props.history.replace('/checkout')
    }

    const handlePurchaseLogin = () => {props.history.replace('/auth')}

    const disabledInfo = {
        ...props.ings
    }

    for (let key in disabledInfo){
        disabledInfo[key] = (disabledInfo[key] <= 0)
    }

    let orderSummary = null;
    let burger = props.error ? <p>Ingredients can't be loaded :(</p> : <Spinner/>
    if(props.ings){
        burger = (
            <Wrapper>
                <Burger ingredients={props.ings}/>
                <BuildControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled={disabledInfo}
                    price={props.price}
                    ordered={handlePurchase}
                />
            </Wrapper>
        )

        orderSummary = (
            <OrderSummary 
                cancelOrder={handleCancelPurchase}
                ingredients={props.ings}
                continueOrder={handleContinuePurchase}
                loginHandler={handlePurchaseLogin}
                price={props.price}
                isAuthenticated={props.isAuthenticated}
            />
        )
    }

    return (
        <Wrapper>
            <Modal show={props.ordered} modalClosed={handleCancelPurchase}>
                {orderSummary}
            </Modal>

            {burger}
            
        </Wrapper>
    );


}



const mapStateToProps = state => {
    return {
        ings : state.buildBurger.ingredients,
        price: state.buildBurger.totalPrice,
        ordered: state.placeOrder.ordered,
        error: state.buildBurger.error,
        isAuthenticated: state.authenticate.token !== null
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onInitIngredients : () => dispatch(actions.initIngredients()),
        onIngredientAdded : (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved : (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitOrder: () => dispatch(actions.initOrder()),
        onCanceledOrder: () => dispatch(actions.canceledOrder())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));