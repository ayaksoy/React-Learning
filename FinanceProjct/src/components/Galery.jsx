import React from "react";

export default function Galery() {
	return (
		<div className="gallery-sec pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="sec-title">
							<h1>Our Project Gallery</h1>
							<p>
								Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem
								erat semper, auctor suspendisse quisque molestie ut. Elit massa
								dui, leo enim magna. Cursus maecenas cubilia, ac nonummy,
								egestas mauris .
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="gallery-area">
						<div className="navbarsort">
							<button
								type="button"
								className="navbar-toggle collapsed"
								data-toggle="collapse"
								data-target="#navbarfiltr"
								aria-expanded="false"
							>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<div className="shorttitle">
								<h2>Sort Gallery</h2>
							</div>
						</div>
						<div
							className="collapse navbar-collapse latest--project"
							id="navbarfiltr"
						>
							<ul className="simplefilter">
								<li className="active" data-filter="*">
									All
								</li>
								<li data-filter=".Planing">Planing</li>
								<li data-filter=".Analysis">Analysis</li>
								<li data-filter=".Management">Management</li>
								<li data-filter=".Investment">Investment</li>
							</ul>
						</div>
						<div className="gallery-container">
							<div className="col-xs-6 col-sm-4 col-md-3 filtr-item Planing">
								<div className="gallery-item">
									<img src="img/p1.jpg" alt />
									<div className="project-project-gallery-overlay">
										<div className="project-gallery-overlay-text">
											<div className="gallery-button">
												<h2>
													<a href="project-details.html">Business Planing</a>
												</h2>
												<a href="img/p1.jpg" className="gallery-photo">
													<i className="fa fa-camera"></i>
												</a>
												<a href="project-details.html">
													<i className="fa fa-link"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-3 filtr-item Analysis">
								<div className="gallery-item">
									<img src="img/p2.jpg" alt />
									<div className="project-project-gallery-overlay">
										<div className="project-gallery-overlay-text">
											<div className="gallery-button">
												<h2>
													<a href="project-details.html">Analysis business</a>
												</h2>
												<a href="img/p1.jpg" className="gallery-photo">
													<i className="fa fa-camera"></i>
												</a>
												<a href="project-details.html">
													<i className="fa fa-link"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-3 filtr-item Management">
								<div className="gallery-item">
									<img src="img/p3.jpg" alt />
									<div className="project-project-gallery-overlay">
										<div className="project-gallery-overlay-text">
											<div className="gallery-button">
												<h2>
													<a href="project-details.html">Management Planing</a>
												</h2>
												<a href="img/p1.jpg" className="gallery-photo">
													<i className="fa fa-camera"></i>
												</a>
												<a href="project-details.html">
													<i className="fa fa-link"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-3 filtr-item Planing">
								<div className="gallery-item">
									<img src="img/p4.jpg" alt />
									<div className="project-project-gallery-overlay">
										<div className="project-gallery-overlay-text">
											<div className="gallery-button">
												<h2>
													<a href="project-details.html">Business Planing</a>
												</h2>
												<a href="img/p1.jpg" className="gallery-photo">
													<i className="fa fa-camera"></i>
												</a>
												<a href="project-details.html">
													<i className="fa fa-link"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-3 filtr-item Analysis">
								<div className="gallery-item">
									<img src="img/p5.jpg" alt />
									<div className="project-project-gallery-overlay">
										<div className="project-gallery-overlay-text">
											<div className="gallery-button">
												<h2>
													<a href="project-details.html">Business Analysis</a>
												</h2>
												<a href="img/p1.jpg" className="gallery-photo">
													<i className="fa fa-camera"></i>
												</a>
												<a href="project-details.html">
													<i className="fa fa-link"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-3 filtr-item Management">
								<div className="gallery-item">
									<img src="img/p6.jpg" alt />
									<div className="project-project-gallery-overlay">
										<div className="project-gallery-overlay-text">
											<div className="gallery-button">
												<h2>
													<a href="project-details.html">Management Planing</a>
												</h2>
												<a href="img/p1.jpg" className="gallery-photo">
													<i className="fa fa-camera"></i>
												</a>
												<a href="project-details.html">
													<i className="fa fa-link"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-3 filtr-item Analysis">
								<div className="gallery-item">
									<img src="img/p7.jpg" alt />
									<div className="project-project-gallery-overlay">
										<div className="project-gallery-overlay-text">
											<div className="gallery-button">
												<h2>
													<a href="project-details.html">Business Analysis</a>
												</h2>
												<a href="img/p1.jpg" className="gallery-photo">
													<i className="fa fa-camera"></i>
												</a>
												<a href="project-details.html">
													<i className="fa fa-link"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-3 filtr-item Management">
								<div className="gallery-item">
									<img src="img/p8.jpg" alt />
									<div className="project-project-gallery-overlay">
										<div className="project-gallery-overlay-text">
											<div className="gallery-button">
												<h2>
													<a href="project-details.html">Management Planing</a>
												</h2>
												<a href="img/p1.jpg" className="gallery-photo">
													<i className="fa fa-camera"></i>
												</a>
												<a href="project-details.html">
													<i className="fa fa-link"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
