import * as actions from './actions';
import database from '../../axios/database';




const purchaseBurgerStart = () => {
    return {
        type: actions.PURCHASE_BURGER_START
    }
}


const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actions.PURCHASE_BURGER_SUCCESS,
    }
}


const purchaseBurgerFail = (error) => {
    return {
        type: actions.PURCHASE_BURGER_FAIL,
        error: error
    }
}

//EXPORTS
export const checkoutBurger = () => {
    return {
        type: actions.CHECKOUT_BURGER
    }
}

export const purchaseBurger = (orderData,idToken) => {
    return dispatch => {
        
        dispatch(purchaseBurgerStart())
        database.post('/orders.json?auth=' + idToken,orderData)
        .then(response => {
            dispatch(purchaseBurgerSuccess())
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error))
        })
    }
}