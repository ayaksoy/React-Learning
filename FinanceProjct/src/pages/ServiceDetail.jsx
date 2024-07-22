import React from "react";
import Hero from "../components/Hero";

export default function ServiceDetail(props) {
	return (
		<div>
			<Hero title="Service Detail" />
			<div className="about-service-sec pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="widget-archive">
								<h1>Service List</h1>
								<ul>
									<li>
										<a href="#">Business Planing</a>
									</li>
									<li>
										<a href="#">Investment Pla</a>
									</li>
									<li>
										<a href="#">Analysis business</a>
									</li>
									<li>
										<a href="#">Official Funds</a>
									</li>
									<li>
										<a href="#">Startup business</a>
									</li>
									<li>
										<a href="#">Insurence Policy</a>
									</li>
									<li>
										<a href="#">Management Planing</a>
									</li>
								</ul>
							</div>
							<div className="brochures">
								<h2>download brochures</h2>
								<ul>
									<li>
										<a href="#">
											Download.Doc
											<span>
												<i className="fa fa-download"></i>
											</span>
										</a>
									</li>
									<li>
										<a href="#">
											Download.Pdf
											<span>
												<i className="fa fa-download"></i>
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-9">
							<div className="tab-content">
								<div className="row">
									<div className="col-md-6">
										<div className="service-details">
											<h2>
												<a href="#">features of Business Planing</a>
											</h2>
											<p>
												Lorem ipsum dolor sit amet, mauris maecenas vel. Massa
												ultrices erat sit dolore. Vestibulum nunc. Nec tellus
												vulputate facilisis. Congue nunc enim platea, dolor
												lacinia arcu, vehicula nascetur purus penatibus ac
												pulvinar, sit ac faucibus. Vitae eros justo duis lacus
												iaculis eudolor lacinia arcu, vehicula nascetur purus
												penatibus ac pulvinar, sit ac faucibus. Vitae eros justo
												duis lacus iaculis eu,{" "}
											</p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="service-details-img">
											<img src="img/service_details.jpg" alt />
										</div>
									</div>
									<div className="col-md-12">
										<div className="service-details-text">
											<h2>details of Business Planing</h2>
											<p>
												Suspendisse in nisl eu, ac amet lorem pretium suscipit
												felis, suspendisse venenatis in justo amet. Quaerat aut
												augue, lacus ornare ante in, maecenas do turpis nam,
												commodo facilisis tincidunt metus mauris libero,
												praesent consectetuer sit mauris justo volutpat id. Arcu
												nam velit ut eget eros erat, purus laoreet sit praesent
												at vehicula vitae, massa wisi, lacinia tempor ipsum nec
												eleifend sed vel, vehicula amet quis donec suspendisse
												elit. Accumsan id vitae vestibulum, vitae bibendum sit.
												Nisi odio sapien nunc sociis, ante non quis. .
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service bg-gray pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="sec-title">
								<h1>Related Service</h1>
								<div className="border-shape"></div>
								<p>
									Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem
									erat semper, auctor suspendisse quisque molestie ut. Elit
									massa dui, leo enim magna. Cursus maecenas cubilia, ac
									nonummy, egestas mauris .
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="service-item">
							<div className="col-md-4 col-sm-6 inner">
								<div className="media">
									<div className="service-thumb">
										<a href="service-details.html">
											<img src="img/s4.jpg" alt />
										</a>
										<div className="service-icon">
											<a href="service-details.html">Learn More</a>
										</div>
									</div>
									<div className="service-inner-text">
										<div className="media-left">
											<div className="service2_icon">
												<img src="img/icon/funds.png" alt />
											</div>
										</div>
										<div className="media-body">
											<h2>
												<a href="service-details.html">Official Funds</a>
											</h2>
											<p>
												Lorem ipsum dolor sit amet, ligula magna at etiam
												aliquip.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="service-item">
							<div className="col-md-4 col-sm-6 inner">
								<div className="media">
									<div className="service-thumb">
										<a href="service-details.html">
											<img src="img/s5.jpg" alt />
										</a>
										<div className="service-icon">
											<a href="service-details.html">Learn More</a>
										</div>
									</div>
									<div className="service-inner-text">
										<div className="media-left">
											<div className="service2_icon">
												<img src="img/icon/teamwork.png" alt />
											</div>
										</div>
										<div className="media-body">
											<h2>
												<a href="service-details.html">Management Planing</a>
											</h2>
											<p>
												Lorem ipsum dolor sit amet, ligula magna at etiam
												aliquip.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="service-item">
							<div className="col-md-4 col-sm-6 inner">
								<div className="media">
									<div className="service-thumb">
										<a href="service-details.html">
											<img src="img/s6.jpg" alt />
										</a>
										<div className="service-icon">
											<a href="service-details.html">Learn More</a>
										</div>
									</div>
									<div className="service-inner-text">
										<div className="media-left">
											<div className="service2_icon">
												<img src="img/icon/rocket-start.png" alt />
											</div>
										</div>
										<div className="media-body">
											<h2>
												<a href="service-details.html">Startup business</a>
											</h2>
											<p>
												Lorem ipsum dolor sit amet, ligula magna at etiam
												aliquip.
											</p>
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
