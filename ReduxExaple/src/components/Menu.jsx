import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function Menu() {
	return (
		<Nav>
			<NavItem>
				<NavLink href="/">Home</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/product">Products</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/categories">Categories</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/about">About</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/contact">Contact</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/cart">Cart</NavLink>
			</NavItem>
		</Nav>
	);
}
