import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleries } from "../features/gallerySlice";
import Hero from "../components/Hero";

export default function Gallery() {
	const dispatch = useDispatch();
	const galleries = useSelector((state) => state.gallery.galleries);
	const galleryStatus = useSelector((state) => state.gallery.status);

	useEffect(() => {
		if (galleryStatus === 'idle') {
			dispatch(fetchGalleries());
		}
	}, [galleryStatus, dispatch]);

	return (
		<div>
			<Hero title="Gallery" />
			<div className="gallery-sec pt-100 pb-70">
				<div className="container">
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
									<li data-filter=".corporate">corporate</li>
									<li data-filter=".consulting">consulting</li>
									<li data-filter=".entertainment">entertainment</li>
									<li data-filter=".working">working</li>
								</ul>
							</div>
							<div className="gallery-container">
								{galleries.map((item) => (
									<div key={item.id} className={`col-xs-6 col-sm-4 col-md-3 filtr-item ${item.category}`}>
										<div className="gallery-item">
											<img src={item.image} alt={item.title} />
											<div className="project-project-gallery-overlay">
												<div className="project-gallery-overlay-text">
													<div className="gallery-button">
														<a href={item.image} className="gallery-photo">
															<i className="fa fa-camera"></i>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
