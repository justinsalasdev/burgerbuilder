import * as actions from './actions';
import axios from '../../axios/orders';



const fetchOrdersSuccess = (orders) => {
    return {
        type: actions.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}


const fetchOrdersFail = (error) => {
    return {
        type: actions.FETCH_ORDERS_FAIL,
        error: error
    }
}

const fetchOrdersStart = () => {
    return {
        type: actions.FETCH_ORDERS_START
    }
}

//EXPORTS

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data){
                    fetchedOrders.unshift({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrdersSuccess(fetchedOrders))
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err))
            })
    }
}