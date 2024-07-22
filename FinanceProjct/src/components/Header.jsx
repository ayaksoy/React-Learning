import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<HeaderTop />

			<div className="hd-sec">
				<div className="container fluid">
					<div className="row">
						<div className="col-md-2">
							<div className="logo">
								<Link to ="/">
									<img src="img/logo.png" className="header-logo1"alt />
								</Link>
							</div>
						</div>
						<div className="col-md-8 col-sm-9">
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
