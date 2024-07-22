import React from "react";
import Hero from "../components/Hero";

export default function About() {
	return (
		<>
			<Hero title="About Us" />
			<div className="about-us-sec pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="about-desc">
								<h1>
									We have <span>30 years</span> experiens & We provied best
									solution for grow up your bussines
								</h1>
								<p>
									Lorem ipsum dolor sit amet, justo nunc orci donec sagittis
									metus dapibus, erat ullamcorper odio augue eleifend, consequat
									enim ullamcorper magnis dignissim nec phasellus, Lorem ipsum
									dolor sit amet, justo nunc orci donec sagittis metus dapibus,
									erat ullamcorper odio augue eleifend, consequat enim
								</p>
								<p>
									Lorem ipsum dolor sit amet, justo nunc orci donec sagittis
									metus dapibus, erat ullamcorper odio augue eleifend, consequat
									enim .
								</p>
								<a href="#">Read More</a>
							</div>
						</div>
						<div className="col-md-6">
							<div className="vedio-inner">
								<img src="img/vedio_thumb.jpg" alt />
								<div className="vedio-overly">
									<div className="vedio-button">
										<a
											href="https://www.youtube.com/watch?v=YzDz8g1z83U"
											className="mfp-iframe vedio-play"
										></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
