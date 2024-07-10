import { useState, useEffect } from "react";

function App() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);

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

	return (
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
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
