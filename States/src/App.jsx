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
import Ust from "./components/Ust";
import Kategoriler from "./components/Kategoriler";
import Urunler from "./components/Urunler";
import Sepet from "./components/Sepet";

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

	const sepetSifirla = () => {
		setSepet([]);
	};

	return (
		<Container fluid>
			<Ust
				sepet={sepet}
				sepetguncelle={sepetguncelle}
				sepetSifirla={sepetSifirla}
				toggle={toggle}
				isOpen={isOpen}
			/>
			<Row>
				<Col xs="3">
					<Kategoriler
						kategoriler={kategoriler}
						kategoridegister={kategoridegister}
						secilikategori={secilikategori}
					/>
				</Col>
				<Col xs="9">
					<Urunler
						urunler={urunler}
						sepeteEkle={sepeteEkle}
						secilikategori={secilikategori}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
