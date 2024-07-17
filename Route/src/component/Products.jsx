import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardGroup,
	Button,
	Col,
	CardTitle,
} from "reactstrap";

const Products = (props) => {
	const { products, currentCategory, addToCart } = props;

	return (
		<>
			<h2>{props.currentCategory}</h2>
			<CardGroup>
				{props.products.map((product) => (
					<Col xs="3" key={product.id}>
						<Card style={{ marginLeft: "10px", marginRight: "10px" }}>
							<CardImg
								top
								width="100%"
								src={product.image}
								alt="Card image cap"
							/>
							<CardBody>
								<CardTitle>{product.productName}</CardTitle>
								<CardText>{product.desc}</CardText>
								<Button onClick={() => props.addToCart(product)}>
									Add to Cart
								</Button>
							</CardBody>
						</Card>
					</Col>
				))}
			</CardGroup>
		</>
	);
};

export default Products;
