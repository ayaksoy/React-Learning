const Sepet = (props) => {
	return (
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
				<DropdownItem onClick={sepetSifirla}>Sıfırla</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	);
};
export default Sepet;
