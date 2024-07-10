import { Container, Row, Col } from "reactstrap";
import Card from "./Component/Card";
import Categories from "./Component/Categories";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Products from "./Component/Products";
import React, { useState, useEffect } from "react";

const App = () => {
	const title = "Title";
	const [currentCategory, setCurrentCategory] = useState("");
	const [products, setProducts] = useState([]);
	const [Card, setCard] = useState([]);

	const changeCategory = (category) => {
		setCurrentCategory(category.categoryName);
		getProducts(category.id);
	};

	const getProducts = (categoryId) => {
		let url = "http://localhost:3000/products";
		if (categoryId) {
			url += "?categoryId=" + categoryId;
		}
		fetch(url)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	};
	useEffect(() => {
		getProducts();
	}, []);

	const addToCard = (product) => {
		let newCard = { ...Card };
		var addedItem = newCard.find((c) => c.product.id === product.id);
		if (addedItem) {
			addedItem.quantity += 1;
		} else {
			newCard.push({ product: product, quantity: 1 });
		}
		setCard(newCard);
	};

	const removeFromCard = (product) => {
		var newCard = Card.filter((c) => c.product.id !== product.id);
		setCard(newCard);
	};

	return (
		<Container>
			<Header card={Card} removeFromCard={removeFromCard} />
			<Row>
				<Col xs="3">
					<Categories
						changeCategory={changeCategory}
						currentCategory={currentCategory}
					/>
				</Col>
				<Col xs="9">
					<Products
						addToCard={addToCard}
						products={products}
						currentCategory={currentCategory}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
