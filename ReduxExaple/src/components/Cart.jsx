import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";
import { Button } from "reactstrap";

export default function Cart() {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);
	return (
		<div>
			<h2>Cart</h2>
			{items.length === 0 ? (
				<p>YourCartEmty</p>
			) : (
				<div>
					<ul>
						{items.map((item) => (
							<li key={item.id}>
								<p>{item.title}</p>
								<p>{item.price}</p>
								<Button onClick={() => dispatch(removeFromCart(item.id))}>
									Remove
								</Button>
							</li>
						))}
					</ul>
					<Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
				</div>
			)}
		</div>
	);
}
