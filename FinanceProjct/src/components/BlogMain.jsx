import React from "react";
import BlogCardMain from "./BlogCardMain";

export default function BlogMain() {
	return (
		<div className="blog-sec pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="sec-title">
							<h1>our latest post</h1>
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
					<BlogCardMain />
				</div>
			</div>
		</div>
	);
}
