import { Container, Row, Col } from "reactstrap";
import Card from "./Component/Card";
import Categories from "./Component/Categories";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Products from "./Component/Products";
import React from "react";

const App = () => {
	const title = "Title";
	return (
		<Container>
			<Header title={title} />
			<Row>
				<Col xs="3">
					<Categories title={title} />
				</Col>
				<Col xs="9">
					<Products title={title} />
				</Col>
			</Row>
		</Container>
	);
};

export default App;
