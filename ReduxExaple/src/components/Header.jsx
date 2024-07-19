import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
	return (
		<Navbar color="dark" light expand="md">
			<NavbarBrand href="/">reactstrap</NavbarBrand>
		</Navbar>
	);
}
