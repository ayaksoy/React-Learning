import React from "react";

export default function BlogCardMain() {
	return (
		<div className="col-md-4 col-sm-6">
			<div className="media">
				<div className="single-post">
					<div className="single-post-thumb">
						<img src="img/b1.jpg" alt />
						<div className="single-post-thumb-overlay">
							<div className="post-meta">
								<ul>
									<li>
										<a href>
											<i className="fa fa-user"></i>Admin
										</a>
									</li>
									<li>
										<a href>
											<i className="fa fa-calendar"></i>1 Jan 2018
										</a>
									</li>
									<li>
										<a href>
											<i className="fa fa-comment-o"></i>36
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="single-post-text">
						<h2>
							<a href="blog-details.html">
								Augue docendi signiferumque an cum. Te meliore definiebas.
							</a>
						</h2>
						<p>
							Lorem ipsum dolor sit amet, fusce adipiscing at sed aliquam
							pellentesque eu, etiam in massa. Sagittis urna tellus augue montes
							.
						</p>
						<a href="blog-details.html" className="blog-readmore">
							Continue reading...
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
