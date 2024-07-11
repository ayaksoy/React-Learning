import { ListGroup, ListGroupItem } from "reactstrap";

const Kategoriler = (props) => {
	return (
		<ListGroup>
			{props.kategoriler.map((kategori) => (
				<ListGroupItem
					active={kategori.categoryName === props.secilikategori}
					key={kategori.id}
					onClick={() => props.kategoridegister(kategori)}
				>
					{kategori.categoryName}
				</ListGroupItem>
			))}
		</ListGroup>
	);
};
export default Kategoriler;
