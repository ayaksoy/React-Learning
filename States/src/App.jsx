import { useState, useEffect } from "react";

function App() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	const fetchCategories = () => {
		let url = "http://localhost:3000/categories";
		fetch(url)
			.then((response) => response.json())
			.then((data) => setCategories(data));
	};

	useEffect(() => {
		fetchCategories();
		fetchProducts();
	}, []);
	const fetchProducts = () => {
		let url = "http://localhost:3000/products";
		fetch(url)
			.then((response1) => response1.json())
			.then((data1) => setProducts(data1));
	};
	const addToCart = (product) => {
		//setCart([...cart, product]);
		let newCart = [...cart];
		let itemInCart = newCart.find((p) => p.id === product.id);
		if (itemInCart) {
			itemInCart.quantity++;
		} else {
			itemInCart = { ...product, quantity: 1 };
			newCart.push(itemInCart);
		}
		setCart(newCart);
	};
	const removeOneFromCart = (product) => {
		// let newCart = cart.filter((p) => p.id !== product.id);
		// setCart(newCart);
		let newCart = [...cart];
		let itemInCart = newCart.find((p) => p.id === product.id);
		if (itemInCart.quantity > 1) {
			itemInCart.quantity--;
			setCart(newCart);
		} else {
			newCart = newCart.filter((p) => p.id !== product.id);
			setCart(newCart);
		}
	};
	const removeFromCart = (product) => {
		let newCart = cart.filter((p) => p.id !== product.id);
		setCart(newCart);
	};
	return (
		<>
			<div style={{ display: "flex" }}>
				<div style={{ width: "40%" }}>
					<h1>Kategoriler</h1>
					<ul>
						{categories.map((category) => (
							<li>{category.categoryName}</li>
						))}
					</ul>
				</div>
				<div style={{ width: "40%" }}>
					<h1>Products</h1>
					{products.map((product) => (
						<div>
							{product.categoryId} - {product.productName}
							<button onClick={() => addToCart(product)}>Sepete ekle</button>
						</div>
					))}
				</div>
			</div>

			<div style={{ width: "100%" }}>
				<h1>Sepet</h1>
				{cart.map((product) => (
					<div>
						{product.productName} - {product.quantity}
						<button
							style={{ color: "red", margin: "0px 5px 0px 10px" }}
							onClick={() => removeOneFromCart(product)}
						>
							-
						</button>
						<button
							style={{ color: "red", margin: "5px" }}
							onClick={() => removeFromCart(product)}
						>
							X
						</button>
					</div>
				))}
			</div>
		</>
	);
}

export default App;
