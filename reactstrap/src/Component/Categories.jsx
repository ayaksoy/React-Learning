import { ListGroup, ListGroupItem } from "reactstrap";
import React, { useState, useEffect } from "react";
const Categories = (props) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = () => {
		fetch("http://localhost:3000/categories")
			.then((response) => response.json())
			.then((data) => setCategories(data));
	};
	return (
		<ListGroup>
			{categories.map((category) => (
				<ListGroupItem
					active={
						category.categoryName === props.currentCategory ? true : false
					}
					key={category.id}
					onClick={() => props.changeCategory(category)}
				>
					{category.categoryName}
				</ListGroupItem>
			))}
		</ListGroup>
	);
};

export default Categories;
