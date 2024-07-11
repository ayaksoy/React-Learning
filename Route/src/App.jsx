import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
	useParams,
} from "react-router-dom";
import alertify from "alertifyjs";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Categories from "./component/Categories";
import Products from "./component/Products";
import Contact from "./component/Contact";
import Profile from "./component/Profile";
import ProductDetail from "./component/ProductDetail";
import NotFound from "./component/NotFound";
import CartDetail from "./component/CartDetail";
import { Container, Row, Col } from "reactstrap";

function App() {
	return (
		<>
			<Container>
				<Header />
				<Row>
					<Col xs="3">
						<Categories />
					</Col>
					<Routes>
						<Route path="/" element={<Products />} />
						<Route path="/cart" element={<CartDetail />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/productdetail:id" element={<ProductDetail />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</>
	);
}

export default App;
