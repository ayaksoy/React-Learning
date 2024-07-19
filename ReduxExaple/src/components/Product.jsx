import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Product() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.products);
	const productStatus = useSelector((state) => state.products.status);
	const error = useSelector((state) => state.products.error);

	useEffect(() => {
		if (productStatus === "idle") {
			dispatch(fetchProducts());
		}
	}, [productStatus, dispatch]);

	return (
		<div>
			<h2>Products</h2>
			{productStatus === "loading" && <p>Loading...</p>}
			{productStatus === "failed" && <p>{error}</p>}
			{productStatus === "succeeded" && (
				<div>
					{products.map((product) => (
						<Card key={product.id}>
							<CardBody>
								<CardTitle tag="h5">{product.title}</CardTitle>
								<CardText>{product.description}</CardText>
								<Link to={`/product/${product.id}`}>
									<Button>View</Button>
								</Link>
							</CardBody>
						</Card>
					))}
				</div>
			)}
		</div>
	);
}
