function Menu(data) {
	return (
		<ul style={{ listStyleType: "none", padding: 0, backgroundColor: "black" }}>
			{data.items.map((item, index) => (
				<li key={index} style={{ padding: "10px", color: "white" }}>
					{item}
				</li>
			))}
		</ul>
	);
}
export default Menu;
