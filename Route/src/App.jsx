import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
	useParams,
} from "react-router-dom";
import alertify from "alertifyjs";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Categories from "./component/Categories";
import Products from "./component/Products";
import Contact from "./component/Contact";
import Profile from "./component/Profile";
import ProductDetail from "./component/ProductDetail";
import NotFound from "./component/NotFound";
import CartDetail from "./component/CartDetail";
import { Container, Row, Col } from "reactstrap";
import React, { useState, useEffect, setState } from "react";

function App() {
	const [currantCategory, setCurrantCategory] = useState("");
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");

	const getProduct = (categoryId) => {
		let url = "http://localhost:3000/products";
		if (categoryId) {
			url += "?categoryId=" + categoryId;
		}
		fetch(url)
			.then((response) => response.json())
			.then((data) => setProducts(data));
	};

	const changeCategory = (category) => {
		setCurrantCategory(category.categoryName);
		getProduct(category.id);
	};

	useEffect(() => {
		getProduct();
	}, []);

	const addToCart = (product) => {
		let newCart = [...cart];
		var addedItem = newCart.find((c) => c.product.id === product.id);
		if (addedItem) {
			addedItem.quantity += 1;
		} else {
			newCart.push({ product: product, quantity: 1 });
		}
		setCart(newCart);
		alertify.success(product.productName + " added to cart!", 2);
	};

	const removeOneFromCart = (product) => {
		let newCart = [...cart];
		var removeItem = newCart.find((c) => c.product.id === product.id);
		if (removeItem.quantity > 1) {
			removeItem.quantity -= 1;
		} else {
			newCart = newCart.filter((c) => c.product.id !== product.id);
		}
		setCart(newCart);
		alertify.error(product.productName + " removed from cart!", 2);
	};
	const clearCart = () => {
		setCart([]);
		alertify.warning("Cart cleared!", 2);
	};
	const updateCart = (product, post) => {
		if (post === "arttir") {
			addToCart(product);
		} else if (post === "azalt") {
			addToCart(product);
		}
	};
	return (
		<>
			<Container>
				<Header cart={cart} clearCart={clearCart} updateCart={updateCart} />
				<Row>
					<Col xs="3">
						<Categories
							changeCategory={changeCategory}
							currentCategory={currantCategory}
						/>
					</Col>
					<Routes>
						<Route
							path="/"
							element={
								<Products
									products={products}
									currantCategory={currantCategory}
									addToCart={addToCart}
								/>
							}
						/>
						<Route path="/cart" element={<CartDetail />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/productdetail:id" element={<ProductDetail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</>
	);
}

export default App;
