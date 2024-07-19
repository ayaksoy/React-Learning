import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Contact from "./components/Contact";
import Categories from "./components/Categories";

function App() {
	return <div className="App">
    <Topbar />
    <Header />
    <Menu />
    <Routes>
      <Route path="/" element={<Slider />} />
      <Route path="product" element={<Product />} />
      <Route path="categories" element={<Categories />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>



  </div>;
}

export default App;
