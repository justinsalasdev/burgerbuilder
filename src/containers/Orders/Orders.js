import "./orders.scss"

import React, { useEffect } from "react"
import * as actions from "../../store/actions/exports"
import Order from "./Order"
import Spinner from "../../recycle/Spinner/Spinner"
import { useSelector, useDispatch } from "react-redux"

const Orders = props => {
	const userId = useSelector(state => state.login.userId)
	const idToken = useSelector(state => state.login.idToken)
	const orders = useSelector(state => state.fetchOrders.orders)
	const loading = useSelector(state => state.fetchOrders.loading)
	const ordersStatus = useSelector(state => state.fetchOrders.ordersStatus)

	useEffect(() => {
		if (ordersStatus === "outdated") {
			dispatch(actions.fetchOrders(idToken, userId))
		} else {
		}
		// eslint-disable-next-line
	}, [])

	const dispatch = useDispatch()

	const renderOrders = orders => {
		return orders.map(order => {
			//return array of <li>s
			return (
				<li className="orders__order" key={order.key}>
					<Order order={order} />
				</li>
			)
		})
	}

	return (
		<>
			{loading ? (
				<div>
					<p style={{ color: "wheat", marginBottom: "1rem" }}>
						Fetching previous orders...
					</p>
					<Spinner />
				</div>
			) : (
				<section className="orders scrollbar">
					<ul>{renderOrders(orders)}</ul>
				</section>
			)}
		</>
	)
}

export default Orders
