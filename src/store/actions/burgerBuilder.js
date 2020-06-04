import * as actions from './actions';
import axios from '../../axios-orders';

export const addIngredient = (ingredient) => {
    return {
        type: actions.ADD_INGREDIENT,
        ingredient: ingredient
    }
}

export const removeIngredient = (ingredient) => {
    return {
        type: actions.REMOVE_INGREDIENT,
        ingredient: ingredient
    }
}

export const setIngredients = (ingredients) => {
    console.log(ingredients)
    return {
        type: actions.SET_INGREDIENTS,
        ingredients: ingredients
    }
}


export const fetchIngredientsFailed = () => {
    return {
        type: actions.FETCH_INGREDIENTS_FAILED
    }
}


export const initIngredients = () => {
    return function dispatch(){
       
       return  axios.get('/ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data))
        })
        .catch(error => {
            dispatch(fetchIngredientsFailed())
        })
}