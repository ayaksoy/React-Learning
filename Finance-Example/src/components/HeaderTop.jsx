import React from "react";

export default function HeaderTop() {
	return (
		<div className="header-top">
			<div className="container">
				<div className="row">
					<div className="col-md-7 col-sm-8">
						<div className="header-left">
							<ul>
								<li>
									<i className="fa fa-envelope-o"></i>
									<a
										href="https://themeearth.com/cdn-cgi/l/email-protection"
										className="__cf_email__"
										data-cfemail="ccb5a3b9bea1ada5a08caba1ada5a0e2afa3a1"
									>
										[email&#160;protected]
									</a>
								</li>
								<li>
									<i className="fa fa-map-marker"></i>Californiya , United State
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-5 col-sm-4">
						<div className="header-right-div">
							<div className="soical-profile">
								<span className="social-title">Follow Us</span>
								<ul>
									<li>
										<a href>
											<i className="fa fa-facebook"></i>
										</a>
									</li>
									<li>
										<a href>
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href>
											<i className="fa fa-google"></i>
										</a>
									</li>
									<li>
										<a href>
											<i className="fa fa-skype"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
