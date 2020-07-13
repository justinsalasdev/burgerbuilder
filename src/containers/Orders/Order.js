
import './order.scss';
import React from 'react';




const Order = props => {
    return (
        <div className='order'>
            <div className="order__date">Date</div>
            <div className="order__ingredients">Ingredients</div>
            <div className="order__price">Price</div>
        </div>
    )
}

export default Order;