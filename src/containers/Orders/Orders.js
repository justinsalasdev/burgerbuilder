import React, {useEffect, useCallback} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios/orders';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {useSelector,useDispatch} from 'react-redux';
import * as actions from '../../store/actions/exports';
import Spinner from '../../components/Spinner/Spinner';


const Orders = props => {
        
    const orders = useSelector(state => state.fetchOrders.orders)
    const fetching = useSelector(state => state.fetchOrders.fetching)
    const token = useSelector(state => state.authenticate.token)
    const userId = useSelector(state => state.authenticate.userId)

    const dispatch = useDispatch()
    const onFetchOrders = useCallback((token,userId) => dispatch(actions.fetchOrders(token,userId)),[dispatch])


    useEffect(() => {
        onFetchOrders(token,userId)
    },[onFetchOrders,token,userId])

    let ordersList = <Spinner/>;
            if (fetching){
                ordersList = orders.map(order => {
                            return (
                                <Order 
                                    key={order.id}
                                    ingredients={order.ingredients}
                                    price={order.price}
                                />
                            )
                        }) 
            }
    
    return(
        <div>
            {ordersList}
        </div>
        )
}

export default withErrorHandler(Orders,axios);