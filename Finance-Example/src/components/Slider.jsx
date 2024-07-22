import React from "react";

export default function Slider() {
	return (
		<div className="slider">
			<div className="all-slide owl-item">
				<div
					className="single-slide"
					style={{ backgroundImage: "url(img/slide1.jpg)" }}
				>
					<div className="slider-overlay"></div>
					<div className="slider-wrapper">
						<div className="slider-text">
							<div className="slider-caption">
								<h1>We are right person for your financial service</h1>
								<p>
									Lorem ipsum dolor sit amet, ligula magna at etiam aliquip
									venenatis. Vitae sit felis donec, suscipit tortor et sapien
									donec ac nec. Nam vel eu amet
								</p>
								<ul>
									<li>
										<a href="about.html">learn more</a>
									</li>
									<li>
										<a href="contact.html">contact us </a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div
					className="single-slide"
					style={{ backgroundImage: "url(img/slide2.jpg)" }}
				>
					<div className="slider-overlay"></div>
					<div className="slider-wrapper">
						<div className="slider-text">
							<div className="slider-caption">
								<h1>We have most experience financial stuff</h1>
								<p>
									Lorem ipsum dolor sit amet, ligula magna at etiam aliquip
									venenatis. Vitae sit felis donec, suscipit tortor et sapien
									donec ac nec. Nam vel eu amet
								</p>
								<ul>
									<li>
										<a href="about.html">Read more</a>
									</li>
									<li>
										<a href="contact.html">contact us </a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
