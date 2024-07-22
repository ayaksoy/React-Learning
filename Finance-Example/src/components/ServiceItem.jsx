import React from "react";

export default function ServiceItem() {
	return (
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
							<p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
