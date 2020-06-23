import React, {useEffect} from 'react';
import Burger from '../../containers/Burger/Burger';
import axios from '../../axios/orders';
import BuildControls from '../../containers/BuildControls/BuildControls';
import Modal from '../../containers/Modal/Modal';
import OrderSummary from '../../containers/OrderSummary/OrderSummary';
import Spinner from '../../recycle/Spinner/Spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../store/actions/exports';

const BurgerBuilder = props => {

    const dispatch = useDispatch();
    // eslint-disable-next-line
    
    const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName))
    const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName))
    const onInitOrder = () => dispatch(actions.initOrder())
    const onCanceledOrder = () => dispatch(actions.canceledOrder())

        
    const ings = useSelector(state => state.buildBurger.ingredients)
    const price = useSelector(state => state.buildBurger.totalPrice)
    const ordered = useSelector(state => state.placeOrder.ordered)
    const error = useSelector(state => state.buildBurger.error)
    const isAuthenticated = useSelector(state => state.authenticate.token !== null)

    useEffect(() => {
        dispatch(actions.initIngredients())
    },[dispatch])

    const handlePurchase = () => {onInitOrder()}
    const handleCancelPurchase = () => {onCanceledOrder()}
    const handleContinuePurchase = () => {
        onCanceledOrder(); //sets order status to false
        props.history.replace('/checkout')
    }

    const handlePurchaseLogin = () => {props.history.replace('/login')}

    const disabledInfo = {
        ...ings
    }

    for (let key in disabledInfo){
        disabledInfo[key] = (disabledInfo[key] <= 0)
    }

    let orderSummary = null;
    let burger = error ? <p>Ingredients can't be loaded :(</p> : <Spinner/>
    if(ings){
        burger = (
            <>
                <Burger ingredients={ings}/>
                <BuildControls
                    ingredientAdded={onIngredientAdded}
                    ingredientRemoved={onIngredientRemoved}
                    disabled={disabledInfo}
                    price={price}
                    ordered={handlePurchase}
                />
                
            </>
        )

        orderSummary = (
            <OrderSummary 
                cancelOrder={handleCancelPurchase}
                ingredients={ings}
                continueOrder={handleContinuePurchase}
                loginHandler={handlePurchaseLogin}
                price={price}
                isAuthenticated={isAuthenticated}
            />
        )
    }

    return (
        <>
            <Modal show={ordered} modalClosed={handleCancelPurchase}>
                {orderSummary}
            </Modal>

            {burger}
            
        </>
    );


}



export default withErrorHandler(BurgerBuilder,axios);