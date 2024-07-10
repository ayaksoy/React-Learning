import { useState, useEffect } from "react";

function App() {
	const [kategoriler, setKategoriler] = useState([]);
	const [urunler, setUrunler] = useState([]);
	const [sepet, setSepet] = useState([]);
	const [seciliKategori, setSeciliKategori] = useState("");

	const kategoriDegistir = (kategori) => {
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

	const urunlercek = (katagoriId) => {
		let url = "http://localhost:3000/products";
		if (katagoriId) {
			url += `?categoryId=${katagoriId}`;
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
		urunlercek();
		kategoricek();
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

		</>
	);
}

export default App;
