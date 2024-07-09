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
	return <></>;
};

export default Categories;
