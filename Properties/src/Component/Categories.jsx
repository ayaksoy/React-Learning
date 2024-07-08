import React from "react";

function Categories(data) {
	return (
		<div>
			<h2>{data.title}</h2>
			<ul>
				{data.index.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default Categories;
