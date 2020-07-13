import './order-summary.scss'
import '../../recycle/Button/button.scss';

import React from 'react';
import Burger from '../Burger/Burger';
import {useSelector} from 'react-redux';


const Checkout = props => {
    const burgerItems = [];
    const ingredients = useSelector(state => state.buildBurger.ingredients);
    const totalPrice = useSelector(state => state.buildBurger.totalPrice.toFixed(2));
    const userData = useSelector(state => state.login.userData);
    
    for(const ingredient in ingredients){
        if(ingredients[ingredient] > 0)
        burgerItems.push(
            <li className={`order-summary__item order-summary__item--${ingredient}`} key={ingredient}>
                <span>{ingredient} : </span>{ingredients[ingredient]}
            </li>
        )
    }

    return (
        <>
            <Burger ingredients={ingredients}/>
            <section className="order-summary">
                <h3 className="order-summary__heading">Order Summary</h3>
                <ul className="order-summary__items">
                    <span>{burgerItems.length> 1 ? 'Ingredients': 'Ingredient'}</span>
                    {burgerItems}
                </ul>
                <p className="order-summary__price">
                    <span>Total Price : </span>${totalPrice}
                </p>
                <address className="order-summary__address">
                    <span>Ship to : </span>{`${userData.zipCode} ${userData.country}`}<br/>
                    <span>Receiver : </span>{userData.name}<br/>
                    <span>Contact : </span>{userData.contactNumber}
                </address>

                <nav>
                    <button type="button" className="button--more order-summary__button">Back</button>
                    <button type="button" className="button--success order-summary__button">Purchase</button>
                </nav>
                
            </section>
        </>
    )
}


export default Checkout;