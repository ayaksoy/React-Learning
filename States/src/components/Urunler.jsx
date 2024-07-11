import {
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Button,
	CardGroup,
	Col,
} from "reactstrap";

const Urunler = (props) => {
	return (
		<>
			<h2>{props.secilikategori}</h2>
			<CardGroup>
				{props.urunler.map((urun) => (
					<Col xs="3" key={urun.id}>
						<Card style={{ marginLeft: "10px", marginRight: "10px" }}>
							<CardImg
								top
								width="100%"
								src={urun.image}
								alt={urun.productName}
							/>
							<CardBody>
								<CardTitle>{urun.productName}</CardTitle>
								<CardText>{urun.desc}</CardText>
								<Button onClick={() => props.sepeteEkle(urun)}>
									Sepete Ekle
								</Button>
							</CardBody>
						</Card>
					</Col>
				))}
			</CardGroup>
		</>
	);
};
export default Urunler;
