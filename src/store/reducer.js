import * as actions from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },

    totalPrice: 4
}


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


function deepClone(object){
    return JSON.parse(JSON.stringify(object))
}

const reducer = (state = initialState, action) => {
    switch(action.type){
       
        case actions.ADD_INGREDIENT:
            const newStateAdd = deepClone(state);
            newStateAdd.ingredients[action.ingredient] ++;  
            newStateAdd.totalPrice += INGREDIENT_PRICES[action.ingredient];

            return newStateAdd;

        case actions.REMOVE_INGREDIENT:
            const newStateRemove = deepClone(state);
            newStateRemove.ingredients[action.ingredient] --;   
            newStateRemove.totalPrice -= INGREDIENT_PRICES[action.ingredient];        
            return newStateRemove;

        default:
            return state;
    }
    
}


export default reducer;