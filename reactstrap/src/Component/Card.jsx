import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const Card = (props) => {
	return (
		<UncontrolledDropdown nav inNavbar>
			<DropdownToggle nav caret>
				{props.card.length}
			</DropdownToggle>
			<DropdownMenu end>
				{props.card.map((cardItem) => (
					<DropdownItem key={cardItem.product.id}>
						{cardItem.product.id}
						<span
							onClick={() => props.removeFromCard(cardItem.product)}
							className="badge badge-danger"
							style={{ marginRight: "10px", backgroundColor: "red" }}
						>
							X
						</span>
						{cardItem.product.productName}
						<span
							className="badge badge-warning"
							style={{ backgroundColor: "green" }}
						>
							{cardItem.quantity}
						</span>
					</DropdownItem>
				))}
				<DropdownItem divider />
				<DropdownItem>Reset</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	);
};

export default Card;
