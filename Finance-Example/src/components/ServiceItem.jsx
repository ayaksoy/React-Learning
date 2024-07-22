import React from "react";
import { Link } from "react-router-dom";

export default function ServiceItem(props) {
	if (!props.service) {
		return <div>Loading...</div>; // veya bir hata mesajı
	}
	return (
		<div className="service-item">
			<div className="col-md-4 col-sm-6 inner">
				<div className="media">
					<div className="service-thumb">
						<Link to={`/service/${props.service.id}`}>
							<img src="img/s6.jpg" alt />
						</Link>
						<div className="service-icon">
							<Link to={`/service/${props.service.id}`}>Learn More</Link>
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
								<Link to={`/service/${props.service.id}`}>
									{props.service.name}
								</Link>
							</h2>
							<p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
