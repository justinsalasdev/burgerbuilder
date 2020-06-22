import React from 'react';
import './ordersummary.scss'
import '../../recycle/Button/button.scss'


const OrderSummary = props => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>
                    {igKey}
                </span> : {props.ingredients[igKey]}
            </li>
            )
        })

        const continueButton = function(isAuthenticated, continueHandler, loginHandler){
            if(isAuthenticated){
                return <button className='button--success ordersummary__button' onClick={continueHandler}>Continue</button>
            }else{
                return <button className='button--success ordersummary__button' onClick={loginHandler}>Login</button>
            }
        }

        return(
            <div className={'ordersummary'}>
                <h3 className={'ordersummary__heading'}>Your Order</h3>
                <p>A delicious burger with the following ingredients :</p>
                <ul className={'ordersummary__items'}>
                    {ingredientSummary}
                </ul>
                <p className={'ordersummary__info'}><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
                {props.isAuthenticated?null : <p className={"ordersummary__info"}>Please login in to continue</p>}
                <button type='button' className='button--failed ordersummary__button' onClick={props.cancelOrder}>Cancel</button>
                {continueButton(props.isAuthenticated,props.continueOrder,props.loginHandler)}
                {/* <Button btnType="Success" clicked={props.continueOrder}>Continue</Button> */}
            </div>
        )
}



export default OrderSummary;