import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Component/Header";
import Categories from "./Component/Categories";
import Products from "./Component/Products";
import Footer from "./Component/Footer";
import Test from "./Component/Test";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Test title="Test Sayfasi" content="TestContent"></Test>
			<Header
				title="Header Sayfasi"
				content="HeaderContent"
				menuu={["anasayfa", "babasayfa", "kardessayfa"]}
			></Header>
			<Categories
				title="Categories Sayfasi"
				index={[
					"Meyve",
					"Sebze",
					"Unlu Mamuller",
					"İçecekler",
					"Temizlik Ürünleri",
				]}
			></Categories>
			<Products title="Products Sayfasi"></Products>
			<Footer title="Footer Sayfasi"></Footer>
		</>
	);
}

export default App;
