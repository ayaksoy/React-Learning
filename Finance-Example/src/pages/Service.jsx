import React from "react";
import Hero from "../components/Hero";
import ServiceItem from "../components/ServiceItem";

export default function Service(props) {
	return (
		<div>
			<Hero title="Service" />
			<div className="service pt-100 pb-70">
				<div className="container">
					<div className="row">
						{props.service.map((item) => (
							<ServiceItem service={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
