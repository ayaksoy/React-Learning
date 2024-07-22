import React from "react";
import Hero from "../components/Hero";

export default function NotFound() {
	return (
		<div>
			<Hero title="404 Not Found" />
			<div className="error-page-sec pt-100 pb-100">
				<div className="container">
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<div className="error-page-content">
								<h1>404</h1>
								<h2>sorry, there is some error here place try later</h2>
								<ul>
									<li>Check Your Internet Connection</li>
									<li>Refresh The Page</li>
									<li>Back To www.financity.com</li>
								</ul>
								<a href="index.html">Go To Home</a>
							</div>
						</div>
						<div className="col-md-3"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
