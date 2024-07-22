import React, { useEffect } from "react";
import ServiceItem from "./ServiceItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../features/serviceSlice";

export default function OurServices() {
	const dispatch = useDispatch();
	const services = useSelector((state) => state.service.services);
	const serviceStatus = useSelector((state) => state.service.status);

	useEffect(() => {
		if (serviceStatus === "idle") {
			dispatch(fetchServices());
		}
	}, [serviceStatus, dispatch]);

	return (
		<div className="service pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="sec-title">
							<h1>Our Services</h1>
							<div className="border-shape"></div>
							<p>
								Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem
								erat semper, auctor suspendisse quisque molestie ut. Elit massa
								dui, leo enim magna. Cursus maecenas cubilia, ac nonummy,
								egestas mauris.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					{services.map((item) => (
						<div className="col-md-4 col-sm-6" key={item.id}>
							<ServiceItem service={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
