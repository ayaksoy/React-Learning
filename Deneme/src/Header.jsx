import Logo from "./Logo";
import Menu from "./Menu";
function Header(data) {
	return (
		<header>
			<h1>{data.title}</h1>
			<Logo logo={data.logo}></Logo>
			<Menu menu={data.menuItems}></Menu>
		</header>
	);
}

export default Header;
