import React, {useEffect} from 'react';
import Order from '../Order/Order';
import axios from 'axios';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {useSelector,useDispatch} from 'react-redux';
import * as actions from '../../store/actions/exports';
import Spinner from '../../recycle/Spinner/Spinner';


const Orders = props => {
        
    const orders = useSelector(state => state.fetchOrders.orders)
    const fetching = useSelector(state => state.fetchOrders.fetching)
    const idToken = useSelector(state => state.login.idToken)
    const userId = useSelector(state => state.login.userId)

    const dispatch = useDispatch();
 

    useEffect(() => {
        dispatch(actions.fetchOrders(idToken,userId))
    // eslint-disable-next-line
    },[idToken,userId])

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