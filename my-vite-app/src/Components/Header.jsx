import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./style.css";

function Header() {
	return (
		<Navbar className="navbar">
			<NavbarBrand href="/" className="navbrand">
				Anasayfa
			</NavbarBrand>
			<Nav>
				<NavItem>
					<NavLink href="/iletisim">İletişim</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/hakkimizda">Hakkımızda</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
}

export default Header;
