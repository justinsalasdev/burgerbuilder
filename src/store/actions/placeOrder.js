import * as actions from './actions';
import axios from '../../axios/orders';




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

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())

        axios.post('/orders.json',orderData)
        .then(response => {
            console.log('post response---',response)
            dispatch(purchaseBurgerSuccess())
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error))
        })
    }
}