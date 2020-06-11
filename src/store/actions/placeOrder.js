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

export const initOrder = () => {
    return {
        type: actions.INIT_ORDER
    }
}


export const canceledOrder = () => {
    return {
        type: actions.CANCELED_ORDER
    }
}

export const checkoutBurger = () => {
    return {
        type: actions.CHECKOUT_BURGER
    }
}

export const purchaseBurger = (orderData,token) => {
    return dispatch => {
        
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json?auth=' + token,orderData)
        .then(response => {
            dispatch(purchaseBurgerSuccess())
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error))
        })
    }
}