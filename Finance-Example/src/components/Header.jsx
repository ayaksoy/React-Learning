import React from "react";

export default function Header() {
	return (
		<header>
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
										<i className="fa fa-map-marker"></i>Californiya , United
										State
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
							<div className="menu">
								<nav id="main-menu" className="main-menu">
									<ul>
										<li className="active">
											<a href="index.html">home</a>
										</li>
										<li>
											<a href="service.html">services</a>
											<ul>
												<li>
													<a href="service.html">Service Page</a>
												</li>
												<li>
													<a href="service-details.html">Service Details</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="project.html">Project</a>
											<ul>
												<li>
													<a href="project.html">Project Page</a>
												</li>
												<li>
													<a href="project-details.html">Project Details</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="#">Page</a>
											<ul>
												<li>
													<a href="about.html">about us</a>
												</li>
												<li>
													<a href="gallery.html">gallery Page</a>
												</li>
												<li>
													<a href="employees.html">employees Page</a>
												</li>
												<li>
													<a href="faq.html">faq Page</a>
												</li>
												<li>
													<a href="404.html">404 Page</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="blog.html">blog</a>
											<ul>
												<li>
													<a href="blog.html">blog</a>
												</li>
												<li>
													<a href="blog-details.html">blog Details</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="contact.html">Contact</a>
										</li>
									</ul>
								</nav>
								<div className="menu-icon">
									<div className="site-search">
										<i className="fa fa-search"></i>
										<div className="search-forum">
											<form action="#">
												<input placeholder="Search For Site" type="text" />
												<input type="submit" value="Go" />
											</form>
										</div>
									</div>
								</div>
							</div>
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
