import * as actions from "./actions";
import axios from "axios";

const setIngredients = ingredients => {
  return {
    type: actions.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

const fetchIngredientsFailed = errorMessage => {
  return {
    type: actions.FETCH_INGREDIENTS_FAILED,
    errorMessage
  };
};

//EXPORTS

export const addIngredient = ingredient => {
  return {
    type: actions.ADD_INGREDIENT,
    ingredient: ingredient
  };
};

export const removeIngredient = ingredient => {
  return {
    type: actions.REMOVE_INGREDIENT,
    ingredient: ingredient
  };
};

export const initIngredients = () => {
  return dispatch =>
    axios
      .get("https://fir-7cc33-default-rtdb.firebaseio.com/ingredients.json")
      .then(
        response => {
          dispatch(setIngredients(response.data));
        },
        error => {
          dispatch(fetchIngredientsFailed("Can't initialize burger builder app :("));
        }
      )
      .catch(error => {
        alert(error);
      });
};
