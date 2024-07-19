import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Topbar() {
	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">reactstrap</NavbarBrand>
		</Navbar>
	);
}
