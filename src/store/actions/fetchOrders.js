import * as actions from './actions';
import axios from 'axios';


const startFetching = () => {
    return {
        type: actions.FETCH_START
    }
}

const storeOrders = (orders) => {
    return {
        type: actions.FETCH_STORE,
        orders: orders
    }
}

export const updateOrdersStatus = (status) => {
    return {
        type: actions.UPDATE_ORDER_STATUS,
        status
    }
}


const handleFetchFailure = (fetchMessage) => {
    return {
        type: actions.FETCH_FAIL,
        fetchMessage,
    }
}


//EXPORTS
export const fetchOrders = (idToken,userId) => {
    return dispatch => {
        dispatch(startFetching())
        const queryParams = `?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`
        const endPoint = `https://react-burger-builder-12ae6.firebaseio.com/orders.json${queryParams}`
        axios.get(endPoint)
            .then(
                response => {
                    const fetchedOrders = [];
                    for (let key in response.data){
                        fetchedOrders.unshift({
                            ...response.data[key],
                            key
                        })
                    }
                dispatch(storeOrders(fetchedOrders))
                dispatch(updateOrdersStatus('updated'))
                },
                () => {
                    dispatch(handleFetchFailure("Can't retrieve your orders :("))
                }

            )
            .catch(error => dispatch(handleFetchFailure("Something went wrong. Unable to fetch your orders")))
    }
}