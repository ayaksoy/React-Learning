import React from "react";
import Hero from "../components/Hero";

export default function Gallery() {
	return (
		<div>
			<Hero title="Gallery" />
			<div class="gallery-sec pt-100 pb-70">
				<div class="container">
					<div class="row">
						<div class="gallery-area">
							<div class="navbarsort">
								<button
									type="button"
									class="navbar-toggle collapsed"
									data-toggle="collapse"
									data-target="#navbarfiltr"
									aria-expanded="false"
								>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
								<div class="shorttitle">
									<h2>Sort Gallery</h2>
								</div>
							</div>
							<div
								class="collapse navbar-collapse latest--project"
								id="navbarfiltr"
							>
								<ul class="simplefilter">
									<li class="active" data-filter="*">
										All
									</li>
									<li data-filter=".corporate">corporate</li>
									<li data-filter=".consulting">consulting</li>
									<li data-filter=".etertainment">etertainment</li>
									<li data-filter=".working">working</li>
								</ul>
							</div>
							<div class="gallery-container">
								<div class="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment">
									<div class="gallery-item">
										<img src="img/g1.jpg" alt />
										<div class="project-project-gallery-overlay">
											<div class="project-gallery-overlay-text">
												<div class="gallery-button">
													<a href="img/g1.jpg" class="gallery-photo">
														<i class="fa fa-camera"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 filtr-item corporate">
									<div class="gallery-item">
										<img src="img/g2.jpg" alt />
										<div class="project-project-gallery-overlay">
											<div class="project-gallery-overlay-text">
												<div class="gallery-button">
													<a href="img/g2.jpg" class="gallery-photo">
														<i class="fa fa-camera"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 filtr-item working">
									<div class="gallery-item">
										<img src="img/g3.jpg" alt />
										<div class="project-project-gallery-overlay">
											<div class="project-gallery-overlay-text">
												<div class="gallery-button">
													<a href="img/g3.jpg" class="gallery-photo">
														<i class="fa fa-camera"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment">
									<div class="gallery-item">
										<img src="img/g4.jpg" alt />
										<div class="project-project-gallery-overlay">
											<div class="project-gallery-overlay-text">
												<div class="gallery-button">
													<a href="img/g4.jpg" class="gallery-photo">
														<i class="fa fa-camera"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 filtr-item working consulting">
									<div class="gallery-item">
										<img src="img/g3.jpg" alt />
										<div class="project-project-gallery-overlay">
											<div class="project-gallery-overlay-text">
												<div class="gallery-button">
													<a href="img/g3.jpg" class="gallery-photo">
														<i class="fa fa-camera"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment">
									<div class="gallery-item">
										<img src="img/g4.jpg" alt />
										<div class="project-project-gallery-overlay">
											<div class="project-gallery-overlay-text">
												<div class="gallery-button">
													<a href="img/g4.jpg" class="gallery-photo">
														<i class="fa fa-camera"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment consulting">
									<div class="gallery-item">
										<img src="img/g5.jpg" alt />
										<div class="project-project-gallery-overlay">
											<div class="project-gallery-overlay-text">
												<div class="gallery-button">
													<a href="img/g5.jpg" class="gallery-photo">
														<i class="fa fa-camera"></i>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 filtr-item etertainment">
									<div class="gallery-item">
										<img src="img/g6.jpg" alt />
										<div class="project-project-gallery-overlay">
											<div class="project-gallery-overlay-text">
												<div class="gallery-button">
													<a href="img/g6.jpg" class="gallery-photo">
														<i class="fa fa-camera"></i>
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
		</div>
	);
}
