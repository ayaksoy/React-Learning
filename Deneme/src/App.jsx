import "./App.css";
import Header from "./Header";
import Vite from "/vite.svg";
import Body from "./Body";
import Footer from "./Footer";
function App() {
	const menuItems = [
		{ text: "Home", url: "/" },
		{ text: "About", url: "/about" },
		{ text: "Contact", url: "/contact" },
	];
	return (
		<>
			<Header logo={<Vite />} menu={menuItems} title="My App" />
			<Body
				title="MyBody"
				slider="https://picsum.photos/1800/600"
				content="lorem"
			/>
			<Footer logo={<Vite />} title="Footer title" content="contentfooter"/>
		</>
	);
}

export default App;
