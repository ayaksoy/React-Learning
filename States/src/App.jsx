import {
	Button,
	Collapse,
	Container,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	ListGroup,
	ListGroupItem,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	CardGroup,
	Col,
	Row,
} from "reactstrap";
import { useState, useEffect } from "react";

function App() {
	const [kategoriler, setKategoriler] = useState([]);
	const [urunler, setUrunler] = useState([]);
	const [sepet, setSepet] = useState([]);
	const [secilikategori, setSeciliKategori] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const kategoridegister = (kategori) => {
		setSeciliKategori(kategori.categoryName);
		urunlercek(kategori.id);
	};

	const kategoricek = () => {
		let url = "http://localhost:3000/categories";
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => setKategoriler(data))
			.catch((error) => console.error("Error fetching categories:", error));
	};

	const urunlercek = (kategoriId = "") => {
		let url = "http://localhost:3000/products";
		if (kategoriId) {
			url += `?categoryId=${kategoriId}`;
		}
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => setUrunler(data))
			.catch((error) => console.error("Error fetching products:", error));
	};

	useEffect(() => {
		kategoricek();
		urunlercek();
	}, []);

	const sepeteEkle = (urun) => {
		let yenisepet = [...sepet];
		var uruneklenmismi = yenisepet.find((u) => u.urun.id === urun.id);
		if (uruneklenmismi) {
			uruneklenmismi.adet += 1;
		} else {
			yenisepet.push({ urun: urun, adet: 1 });
		}
		setSepet(yenisepet);
	};

	const sepetSil = (urun) => {
		let yenisepet = [...sepet];
		let uruneklenmismi = yenisepet.find((u) => u.urun.id === urun.id);
		if (uruneklenmismi.adet > 1) {
			uruneklenmismi.adet -= 1;
		} else {
			yenisepet = yenisepet.filter((u) => u.urun.id !== urun.id);
		}
		setSepet(yenisepet);
	};

	const sepetguncelle = (urun, islem) => {
		if (islem === "arttir") {
			sepeteEkle(urun);
		} else if (islem === "azalt") {
			sepetSil(urun);
		}
	};

	return (
		<>
			<Container fluid>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Erhan</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="#" target="_blank">
									Erhan
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									sepet - {sepet.length}
								</DropdownToggle>
								<DropdownMenu end>
									{sepet.map((urun) => (
										<DropdownItem key={urun.urun.id}>
											<span
												onClick={() => sepetguncelle(urun.urun, "arttir")}
												style={{ marginRight: "10px", cursor: "pointer" }}
											>
												+
											</span>
											{urun.urun.productName}
											<span
												onClick={() => sepetguncelle(urun.urun, "azalt")}
												style={{ marginLeft: "10px", cursor: "pointer" }}
											>
												-
											</span>
										</DropdownItem>
									))}
									<DropdownItem divider />
									<DropdownItem>Sıfırla</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
				<Row>
					<Col xs="3">
						<ListGroup>
							{kategoriler.map((kategori) => (
								<ListGroupItem
									active={kategori.categoryName === secilikategori}
									key={kategori.id}
									onClick={() => kategoridegister(kategori)}
								>
									{kategori.categoryName}
								</ListGroupItem>
							))}
						</ListGroup>
					</Col>
					<Col xs="9">
						<h2>{secilikategori}</h2>
						<CardGroup>
							{urunler.map((urun) => (
								<Col xs="3" key={urun.id}>
									<Card style={{ marginLeft: "10px", marginRight: "10px" }}>
										<CardImg
											top
											width="100%"
											src={urun.image}
											alt={urun.productName}
										/>
										<CardBody>
											<CardTitle>{urun.productName}</CardTitle>
											<CardText>{urun.desc}</CardText>
											<Button onClick={() => sepeteEkle(urun)}>
												Sepete Ekle
											</Button>
										</CardBody>
									</Card>
								</Col>
							))}
						</CardGroup>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
