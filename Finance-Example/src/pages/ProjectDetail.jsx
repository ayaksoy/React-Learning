import React from "react";
import Hero from "../components/Hero";

export default function ProjectDetail() {
	return (
		<div>
			<Hero title="Project Detail" />
			<div className="service-details-page pt-100 pb-100">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="service-details-img">
								<img src="img/project_details.jpg" alt />
							</div>
							<div className="service-details-text">
								<h2>Project Details</h2>
								<p>
									Lorem ipsum dolor sit amet, blandit adipisicing ultricies sed
									molestias ligula id, omnis pellentesque, mauris vivamus
									faucibus nulla iaculis erat risus, suspendisse non aliquam
									mauris risus dui. Et dolor posuere, metus wisi. Justo erat
									ipsum dolor suscipit augue rerum, nulla quis hymenaeos velit
									nulla neque, vitae parturient porttitor. iaculis erat risus,
									suspendisse non aliquam
								</p>
								<p>
									mauris risus dui. Et dolor posuere, metus wisi. Justo erat
									ipsum dolor suscipit augue rerum, nulla quis hymenaeos velit
									nulla neque, vitae parturient porttitor.{" "}
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="project-sidebar">
								<div className="project-details-info">
									<h2>project description </h2>
									<ul>
										<li>
											project starting <span>01/01/18</span>
										</li>
										<li>
											project end <span>02/02/18</span>
										</li>
										<li>
											category <span>Investment Plan</span>
										</li>
										<li>
											buget <span>$ 15000</span>
										</li>
										<li>
											cost <span>$ 25000</span>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
