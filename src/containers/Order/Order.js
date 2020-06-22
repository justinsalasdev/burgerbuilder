import React from 'react';
import classes from './Order.module.css'


const order = (props) => {
    const ingredients = [];

    for (let ingredient in props.ingredients){
        ingredients.push({
                name: ingredient,
                amount: props.ingredients[ingredient]
            }
        )
    }

    const ingredientOutput = ingredients.map(ingredient => {
        return <span 
            key={ingredient.name}
            style={{
                textTransform: "capitalize",
                display: 'inline-block',
                margin: '0 .8rem',
                border: '1px solid gray',
                padding: '0.5rem'
            }}
            >{ingredient.name} : {ingredient.amount} </span>
    })

    return(
        <div className={classes.Order}>
            <p style={{marginBottom: '1.2rem'}}>Ingredients: {ingredientOutput}</p>
            <p>Price : <strong>$ {props.price}</strong></p>
        </div>
    )
}

export default order;