import React from "react";
import Category from "./Category";

function Categories(veri) {
	return (
		<div>
			<h2>{veri.title}</h2>
			{veri.index.map((item) => (
					<Category title={item} />
			))}
		</div>
	);
}

export default Categories;
