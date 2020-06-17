import React, {useEffect} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios/orders';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/exports';
import Spinner from '../../components/Spinner/Spinner';


const Orders = props => {

    useEffect(() => {
        props.onFetchOrders(props.token, props.userId)
    // eslint-disable-next-line
    },[])

    let orders = <Spinner/>;
            if (props.fetching){
                orders = props.orders.map(order => {
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
            {orders}
        </div>
        )
}

    


const mapStateToProps = (state) => {
    return {
        orders: state.fetchOrders.orders,
        fetching: state.fetchOrders.fetching,
        token: state.authenticate.token,
        userId: state.authenticate.userId
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token,userId) => dispatch(actions.fetchOrders(token,userId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));