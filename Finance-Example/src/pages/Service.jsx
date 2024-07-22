import React from "react";
import Hero from "../components/Hero";
import ServiceItem from "../components/ServiceItem";

export default function Service() {
	return (
		<div>
			<Hero title="Service" />
			<div className="service pt-100 pb-70">
				<div className="container">
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
		</div>
	);
}
