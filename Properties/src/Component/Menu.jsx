import React from "react";

function Menu(veri) {
	return (
		<div>
			<h1>Menu</h1>
			<ul>
				{veri.data.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default Menu;
