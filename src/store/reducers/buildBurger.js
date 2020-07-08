import * as actions from '../actions/actions';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    errorMessage: null
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


        case actions.SET_INGREDIENTS:{
            const _ = deepClone(state);
            if(!_.ingredients){
                _.ingredients = {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                    }

                _.error = false;
                _.purchasing = false;
                return _

            } else {
                _.error = false;
                return _
            }
        }
              
        
        case actions.FETCH_INGREDIENTS_FAILED:{
            const _ = deepClone(state)
            _.errorMessage = action.errorMessage;
            return _;       
        }

        case actions.ADD_INGREDIENT:{
            const _ = deepClone(state);
            _.ingredients[action.ingredient] ++;  
            _.totalPrice += INGREDIENT_PRICES[action.ingredient];

            return _;
        }

        case actions.REMOVE_INGREDIENT:{
            const _ = deepClone(state);
            _.ingredients[action.ingredient] --;   
            _.totalPrice -= INGREDIENT_PRICES[action.ingredient];        
            return _;
        }

        default:
            return state;
    }
    
}

export default reducer;