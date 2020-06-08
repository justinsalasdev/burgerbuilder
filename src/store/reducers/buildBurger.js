import * as actions from '../actions/actions';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
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


        case actions.SET_INGREDIENTS:
            const newStateSet = deepClone(state);
            if(!newStateSet.ingredients){
                newStateSet.ingredients = {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                    }

                newStateSet.error = false;
                newStateSet.purchasing = false;
                return newStateSet

            } else {
                newStateSet.error = false;
                return newStateSet
            }
              
        
        case actions.FETCH_INGREDIENTS_FAILED:
            const newStateFail = deepClone(state)
            newStateFail.error = true;
            return newStateFail;       
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