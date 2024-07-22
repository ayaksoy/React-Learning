import React from "react";

export default function BlogCard() {
	return (
		<div className="media">
			<div className="single-post">
				<div className="single-post-thumb">
					<img src="img/blog_1.jpg" alt />
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
										<i className="fa fa-calendar"></i>1 jan 2018
									</a>
								</li>
								<li>
									<a href>
										<i className="fa fa-comment-o"></i>32
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
						Lorem ipsum dolor sit amet, sit ex facer epicurei, vis graeci
						nominati delicata In eos laoreet referrentur eam ad nostro
						intellegebat. integre tibique usu, vel amet instructior ea. Mei
						tantas propriae placerat ad, no dicm iracundia mei lorem doldummy
						text..Marketing Strategy Lorem ipsum dolor sit amet, te velit
						accumsan adolescens eum, epicuri deserunt.
					</p>
					<a href="blog-details.html" className="blog-readmore">
						Continue reading...
					</a>
				</div>
			</div>
		</div>
	);
}
