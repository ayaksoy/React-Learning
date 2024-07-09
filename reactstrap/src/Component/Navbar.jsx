function Navbar(props) {
	return (
		<nav style={{ backgroundColor: "lightblue", padding: "10px" }}>
			<h1>{props.title}</h1>
		</nav>
	);
}
export default Navbar;
