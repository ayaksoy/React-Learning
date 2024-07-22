import React from "react";
import ServiceItem from "./ServiceItem";

export default function OurServices() {
	return (
		<div className="service pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="sec-title">
							<h1>Our Service</h1>
							<div className="border-shape"></div>
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
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
					<ServiceItem />
				</div>
			</div>
		</div>
	);
}
