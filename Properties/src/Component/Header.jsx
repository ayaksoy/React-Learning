import React from "react";

function Header(veri) {
	return (
		<div>
			{veri.title} - {veri.content}
		</div>
	);
}

export default Header;
