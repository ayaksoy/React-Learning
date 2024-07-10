import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import Card from "./Card";
import React, { useState } from "react";

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">Ec</NavbarBrand>
			<NavbarToggler onClick={toggle}>
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https//github.com" target="blank">
								Github
							</NavLink>
						</NavItem>
						<Card card={props.card} removeFromCard={props.removeFromCard} />
					</Nav>
				</Collapse>
			</NavbarToggler>
		</Navbar>
	);
};

export default Header;
