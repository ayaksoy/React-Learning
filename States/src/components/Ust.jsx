import Sepet from "./Sepet";

const Ust = (props) => {
	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">Erhan</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ms-auto" navbar>
					<NavItem>
						<NavLink href="#" target="_blank">
							Erhan
						</NavLink>
					</NavItem>
					<Sepet />
				</Nav>
			</Collapse>
		</Navbar>
	);
};
export default Ust;
