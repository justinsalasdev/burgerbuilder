import React, {useEffect,useCallback} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Burger from '../../components/Burger/Burger';
import axios from '../../axios/orders';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../store/actions/exports';

const BurgerBuilder = props => {

    const dispatch = useDispatch();
    // eslint-disable-next-line
    const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()),[])
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
        onInitIngredients()
    },[onInitIngredients])

    const handlePurchase = () => {onInitOrder()}
    const handleCancelPurchase = () => {onCanceledOrder()}
    const handleContinuePurchase = () => {
        onCanceledOrder(); //sets order status to false
        props.history.replace('/checkout')
    }

    const handlePurchaseLogin = () => {props.history.replace('/auth')}

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
            <Wrapper>
                <Burger ingredients={ings}/>
                <BuildControls
                    ingredientAdded={onIngredientAdded}
                    ingredientRemoved={onIngredientRemoved}
                    disabled={disabledInfo}
                    price={price}
                    ordered={handlePurchase}
                />
            </Wrapper>
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
        <Wrapper>
            <Modal show={ordered} modalClosed={handleCancelPurchase}>
                {orderSummary}
            </Modal>

            {burger}
            
        </Wrapper>
    );


}



export default withErrorHandler(BurgerBuilder,axios);