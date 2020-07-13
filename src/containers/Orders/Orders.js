import React, {useEffect} from 'react';
import * as actions from '../../store/actions/exports'
import Order from './Order';

import {useSelector,useDispatch} from 'react-redux';




const Orders = props => {

    const userId = useSelector(state => state.login.userId)
    const idToken = useSelector(state => state.login.idToken)
    const orders = useSelector(state => state.fetchOrders.orders)

    useEffect(() => {
        dispatch(actions.fetchOrders(idToken,userId))
    // eslint-disable-next-line
    },[])

    const dispatch = useDispatch();
    return (
        <section className='orders'>
            <ul>
                <li>
                    <Order/>
                </li>
            </ul>
            
        </section>

    )
}


export default Orders