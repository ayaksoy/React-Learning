function backup() {
	return (
		<>
			<div style={{ display: "flex" }}>
				<div style={{ width: "30%" }}>
					<h2>Kategoriler</h2>
					<ul>
						{kategoriler.map((kategori) => (
							<button
								key={kategori.id}
								onClick={() => kategoriDegistir(kategori)}
							>
								{kategori.id} - {kategori.categoryName}
							</button>
						))}
					</ul>
				</div>
				<div style={{ width: "50%" }}>
					<h2>
						Urunler <br />
						{seciliKategori}
					</h2>
					{urunler.map((urun) => (
						<div
							key={urun.id}
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								margin: "5px 0",
							}}
						>
							<span style={{ flex: 1 }}>
								{urun.categoryId} - {urun.productName}
							</span>
							<button
								style={{ flex: "0 0 auto", marginLeft: "10px" }}
								onClick={() => sepeteEkle(urun)}
							>
								Sepete Ekle
							</button>
						</div>
					))}
				</div>
			</div>
			<div style={{ width: "25%" }}>
				<h2>Sepetiniz</h2>
				{sepet.map((item) => (
					<div
						key={item.urun.id}
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							margin: "5px 0",
						}}
					>
						<span>
							{item.urun.productName} - {item.adet}
						</span>
						<button
							style={{ color: "green", marginLeft: "10px" }}
							onClick={() => sepetguncelle(item.urun, "arttir")}
						>
							+
						</button>
						<button
							style={{ color: "red", marginLeft: "10px" }}
							onClick={() => sepetguncelle(item.urun, "azalt")}
						>
							-
						</button>
					</div>
				))}
			</div>
		</>
	);
}
