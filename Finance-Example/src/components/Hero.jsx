import React from "react";

export default function Hero(props) {
	return (
		<div className="pagehding-sec">
			<div className="images-overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="page-heading">
							<h1>{props.title}</h1>
						</div>
						<div className="breadcrumb-list">
							<ul>
								<li>
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href>{props.title}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
