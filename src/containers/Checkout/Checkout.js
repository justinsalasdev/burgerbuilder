import './order-summary.scss'
import '../../recycle/Button/button.scss';

import React from 'react';
import Burger from '../Burger/Burger';
import { useSelector } from 'react-redux';
import Alert from '../../recycle/Alert/Alert';
import useAlert from '../../hooks/useAlert';
import CheckoutPrompt from '../../recycle/Prompt/Prompt';
import * as actions from '../../store/actions/exports';
import Spinner from '../../recycle/Spinner/Spinner';

import {useDispatch} from 'react-redux';


const Checkout = props => {

    const dispatch = useDispatch();
    const [alertShown, showAlert] = useAlert(false);

    
    const burgerItems = [];
    const ingredients = useSelector(state => state.buildBurger.ingredients);
    const totalPrice = useSelector(state => state.buildBurger.totalPrice.toFixed(2));
    const userData = useSelector(state => state.login.userData);
    const idToken = useSelector(state => state.login.idToken)
    const userId = useSelector(state => state.login.userId)
    const checkOutMessage = useSelector(state => state.placeOrder.checkOutMessage)
    const loading = useSelector(state => state.placeOrder.loading)

    const orderData = {
        ingredients,
        totalPrice,
        userId,
    }

    console.log(orderData)


    const acknowledgeAlert = () => {
        
        if(/[Tt]hank.*/.test(checkOutMessage)){
            props.history.replace('/')
            showAlert(false);
        } else {
            showAlert(false)
        }

        
    }

    const purchase = () => {
        const date = new Date()
        const purchaseDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        dispatch(actions.purchaseBurger({...orderData,purchaseDate},idToken,showAlert))
    }

    const cancelPurchase = () => {
        props.history.replace('/')
    }

    for (const ingredient in ingredients) {
        if (ingredients[ingredient] > 0)
            burgerItems.push(
                <li className={`order-summary__item order-summary__item--${ingredient}`} key={ingredient}>
                    <span>{ingredient} : </span>{ingredients[ingredient]}
                </li>
            )
    }

    return (
        <>
            {loading? (
                <div>
                    <p style={{color:'wheat',marginBottom:'1rem'}}>Placing your order...</p>
                    <Spinner/>
                </div>
            ):
            <>
                <Burger ingredients={ingredients} />
                <section className="order-summary">
                    <h3 className="order-summary__heading">Order Summary</h3>
                    <ul className="order-summary__items">
                        <span>{burgerItems.length > 1 ? 'Ingredients' : 'Ingredient'}</span>
                        {burgerItems}
                    </ul>
                    <p className="order-summary__price">
                        <span>Total Price : </span>${totalPrice}
                    </p>
                    <address className="order-summary__address">
                        <span>Ship to : </span>{`${userData.zipCode} ${userData.country}`}<br />
                        <span>Receiver : </span>{userData.name}<br />
                        <span>Contact : </span>{userData.contactNumber}
                    </address>

                    <nav>
                        <button type="button" className="button--more order-summary__button" onClick={cancelPurchase}>Back</button>
                        <button type="button" className="button--success order-summary__button" onClick={purchase}>Purchase</button>
                    </nav>
                </section>
            </>
            }

            {!alertShown ? null :
                <Alert closeAlert={acknowledgeAlert}>
                    <CheckoutPrompt acknowledgeAlert={acknowledgeAlert}>{checkOutMessage}</CheckoutPrompt>
                </Alert>
            }
        </>
    )
}


export default Checkout;