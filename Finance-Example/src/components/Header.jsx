import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
	return (
		<header>
			<HeaderTop />

			<div className="hd-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="logo">
								<a href="index.html">
									<img src="img/logo.png" alt />
								</a>
							</div>
						</div>
						<div className="col-md-7 col-sm-9">
							<HeaderMenu />
						</div>
						<div className="col-md-2 col-sm-3">
							<div className="appoitment-button">
								<a href="#">Get A Quote</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
