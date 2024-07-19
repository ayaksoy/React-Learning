import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../store/categorySlice";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function Categories() {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.categories.categories);
	const categoryStatus = useSelector((state) => state.categories.status);
	const error = useSelector((state) => state.categories.error);

	useEffect(() => {
		if (categoryStatus === "idle") {
			dispatch(fetchCategories());
		}
	}, [categoryStatus, dispatch]);

	return (
		<div>
			<h2>Categories</h2>
			{categoryStatus === "loading" && <div>Loading...</div>}
			{categoryStatus === "succeeded" && (
				<ListGroup>
					{categories.map((category) => (
						<ListGroupItem key={category.id}>{category.name}</ListGroupItem>
					))}
				</ListGroup>
			)}
			{categoryStatus === "failed" && <div>{error}</div>}
		</div>
	);
}
