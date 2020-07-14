
import './order.scss';
import React from 'react';
import Ingredient from './Ingredient';



const Order = props => {
    const {ingredients,purchaseDate,totalPrice} = props.order;

    const date = new Date(purchaseDate)
    const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    const renderIngredients = ingredients => {
        const ingredientList = [];
        for (const ing in ingredients ){
            ingredientList.push(
                <li key={ing} className="order__ingredient">
                    <Ingredient name={ing} quantity={ingredients[ing]}/>
                </li>
            )
        }
        return ingredientList
    }
    return (
        <div className='order'>
            <div className="order__date">{formattedDate}</div>
            <ul className="order__ingredients">
                {renderIngredients(ingredients)}
            </ul>
            <div className="order__price">$ {totalPrice}</div>
        </div>
    )
}

export default Order;