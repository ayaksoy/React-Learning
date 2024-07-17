import Cart from "./Cart";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
	const [isOpen, setisOpen] = useState(false);
	const toggle = () => {
		setisOpen(!isOpen);
	};
	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">Kodusta</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ms-auto" navbar>
					<NavItem>
						<NavLink>
							<Link to="/">Anasayfa</Link>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<Link to="/profile">Profil</Link>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<Link to="/contact">Contact</Link>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<Link to="/cart">Your Cart</Link>
						</NavLink>
					</NavItem>
					<Cart
						clearCart={props.clearCart}
						cart={props.cart}
						updateCart={props.updateCart}
					/>
				</Nav>
			</Collapse>
		</Navbar>
	);
};
export default Header;
