import React from "react";
import Menu from "./Menu";

function Header(veri) {
	return (
		<div>
			{veri.title} - {veri.content}
			<Menu data={veri.menuu} />
		</div>
	);
}

export default Header;
