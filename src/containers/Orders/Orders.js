import React, {useEffect} from 'react';
import Order from '../Order/Order';
import database from '../../axios/database';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {useSelector,useDispatch} from 'react-redux';
import * as actions from '../../store/actions/exports';
import Spinner from '../../recycle/Spinner/Spinner';


const Orders = props => {
        
    const orders = useSelector(state => state.fetchOrders.orders)
    const fetching = useSelector(state => state.fetchOrders.fetching)
    const token = useSelector(state => state.login.token)
    const userId = useSelector(state => state.login.userId)

    const dispatch = useDispatch();
 

    useEffect(() => {
        dispatch(actions.fetchOrders(token,userId))
    // eslint-disable-next-line
    },[token,userId])

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

export default withErrorHandler(Orders,database);