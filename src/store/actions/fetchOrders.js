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
                console.log(fetchedOrders)
                dispatch(storeOrders(fetchedOrders))
                },
                () => {
                    dispatch(handleFetchFailure("Can't retrieve your orders :("))
                }

            )
            .catch(error => dispatch(handleFetchFailure("Something went wrong. Unable to fetch your orders")))
    }
}